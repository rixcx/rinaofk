export const pathnames = {
  '/': '/'
  // '/pathnames': {
  //   en: '/pathnames',
  //   de: '/pfadnamen'
  // }
}

// Use the default: `always`
export const localePrefix = 'as-needed' // https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix

export const localeNames = {
  en: 'EN',
  ja: 'JP'
} as const
export const locales = Object.keys(localeNames)
