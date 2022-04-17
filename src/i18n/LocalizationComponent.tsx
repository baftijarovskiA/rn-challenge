import { appstorage, _LOCALE } from '@app/shared/storage/storage'
import i18n from 'i18n-js'
import React, { createContext, useEffect, useMemo, useState } from 'react'
import en from './translations/en.json'

i18n.translations = { en }
i18n.fallbacks = true

interface Props {
  children: React.ReactNode
}

interface LocaleContextInterface {
  t: (scope: i18n.Scope, options?: i18n.TranslateOptions | undefined) => string
  locale: string
  setLocale: (value: string) => void
}

export const LocalizationContext = createContext<LocaleContextInterface | null>(null)

export const LocalizationComponent = ({ children }: Props) => {
  const [locale, setLocale] = useState<string>('en')

  const localizationContext = useMemo(
    () => ({
      t: (scope: i18n.Scope, options: i18n.TranslateOptions | undefined) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale
    }),
    [locale]
  )

  useEffect(() => {
    const locale = appstorage.getString(_LOCALE)
    if (locale) {
      setLocale(locale)
    }
  }, [])

  return <LocalizationContext.Provider value={localizationContext}>{children}</LocalizationContext.Provider>
}
