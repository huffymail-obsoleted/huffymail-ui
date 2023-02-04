export const makeInboxUrl = (prefix: string, domain: string): string => {
  return ['/inbox', [prefix, '@', domain].join('')].join('/')
}
