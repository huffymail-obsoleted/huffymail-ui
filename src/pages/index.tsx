import {AtSymbolIcon, EnvelopeIcon} from '@heroicons/react/24/outline'
import Head from 'next/head'
import {useRouter} from 'next/router'
import {Field, withTypes} from 'react-final-form'

import {Layout} from '../components/templates/layout'
import {makeInboxUrl} from '../libs/urls'

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Huffymail</title>
      </Head>

      <InboxSection/>
    </Layout>
  )
}

declare type FormValues = {
  prefix: string
  domain: string
}

const InboxSection = () => {
  const router = useRouter()

  const {Form} = withTypes<FormValues>()

  const onSubmit = ({prefix, domain}: FormValues) => {
    if (!prefix || !domain) {
      return
    }

    router
      .push(makeInboxUrl(prefix, domain))
      .catch(console.error)
  }

  return (
    <section className="py-16 py-32">
      <div className="mx-auto max-w-xs">
        <Form onSubmit={onSubmit}>
          {({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="prefix" className="block text-sm font-medium text-gray-700">
                  Prefix
                </label>

                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                  </div>

                  <Field
                    name="prefix"
                    component="input"
                    type="text"
                    className="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="john.doe"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                  Domain
                </label>

                <div className="relative mt-1 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <AtSymbolIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                  </div>

                  <Field
                    name="domain"
                    component="select"
                    className="block w-full rounded-md border-gray-300 py-2 pl-10 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue="huffymail.com"
                  >
                    <option value="huffymail.com">huffymail.com</option>
                  </Field>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full"
                >
                  Go to Inbox
                </button>
              </div>
            </form>
          )}
        </Form>
      </div>
    </section>
  )
}
