import {useTranslations} from 'next-intl';

export default function Home() {

 const t = useTranslations('Index');
 
  return (
    <main>
    <h1>{t('title')}</h1>
    <p>この状態で多言語切り替えやってみる！！</p>

    </main>
  );
}