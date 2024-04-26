"use client"
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation'

export default function Desc() {

  const params = useParams()
  const url = params.slug;
  const t = useTranslations('Works.'+ params.slug);

  return (
    <section>
    <p>{url}</p>
    <h1>{t('title')}</h1>
    </section>
  );
}
