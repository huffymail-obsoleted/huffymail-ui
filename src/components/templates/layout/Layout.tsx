export const Layout = (props: any) => {
  const {children} = props

  return (
    <section>
      <section className="p-4 mx-auto max-w-7xl">
        {children}
      </section>
    </section>
  )
}
