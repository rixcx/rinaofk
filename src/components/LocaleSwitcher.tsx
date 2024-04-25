import { useLocale } from 'next-intl'
import { localeNames } from '../config'
import LocaleSwitcherSelect from './LocaleSwitcherSelect'

export default function LocaleSwitcher() {
  const locale = useLocale()
  const localeObject = Object.entries(localeNames)
  if (localeObject.length <= 1) { return }

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {localeObject.map((item) => (
        <option key={item[0]} value={item[0]}>
          {item[1]}
        </option>
      ))}
    </LocaleSwitcherSelect>
  )
}