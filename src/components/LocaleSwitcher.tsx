import { useRouter, usePathname } from '@/navigation'
import { useLocale } from 'next-intl'
import { localeNames } from '@/config'

export default function LocaleSwitcher() {
  const localeObject = Object.entries(localeNames)
  if (localeObject.length <= 1) { return }

  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  function onChange(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLTextAreaElement; //eventのTargetをstringで読めるよう変換
    router.replace(pathname, {locale: target.value})
  }
  
  function changeStyle(value: string) {
    if (locale === value ) {
      return  { fontWeight: 'bold' };
    }
  }
  
  return (
    <>
      {localeObject.map((item) => (
        <button key={item[0]} type="button" onClick={onChange} value={item[0]} style={changeStyle(item[0])}>{item[1]}</button>
      ))}
    </>
  )
}