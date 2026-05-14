export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_I18N_DEFAULT_LANGUAGE || 'en-US'

export const SUPPORTED_LANGUAGES = process.env.NEXT_PUBLIC_I18N_SUPPORTED_LANGUAGES?.split(',') || ['en-US', 'fr']

export const DEFAULT_NAMESPACE = process.env.NEXT_PUBLIC_I18N_DEFAULT_NS || 'translation'

export const COOKIE_NAME = process.env.NEXT_PUBLIC_I18N_DEFAULT_COOKIE_NAME || 'i18next'

export const getOptions = (lang = DEFAULT_LANGUAGE, ns = DEFAULT_NAMESPACE, languages: string[]) => ({
  // debug: true,
  supportedLangs: languages,
  lang,
  fallbackNs: DEFAULT_NAMESPACE,
  DEFAULT_NAMESPACE,
  ns,
})
