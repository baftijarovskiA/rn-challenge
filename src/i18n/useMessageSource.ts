import { useContext } from 'react'
import { LocalizationContext } from './LocalizationComponent'

export const useMessageSource = () => {
  const context = useContext(LocalizationContext)

  //@ts-ignore
  const { t, setLocale } = context

  const getMessage = (value: string) => {
    if (value) {
      const translated = t(value)
      if (translated.includes('missing')) {
        return value
      }
      return translated
    }
    return ''
  }

  return {
    getMessage,
    changeLocale: setLocale
  }
}
