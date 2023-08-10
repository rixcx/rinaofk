import Image from 'next/image'
import Link from "next/link";
import styles from 'styles/pages/Index.module.scss'

export default function Home() {
  return (
    <>
      <section className={styles.content}>
        <h1 className={styles.ttl}>
          Hello. I'm <span className={styles.em}>Rina</span>.<br />I like to design and code.
        </h1>
        <p className={styles.desc}>
          I worked as a web designer and web engineer in Japan from April 2017 to August 2023.<br />Currently I'm living in Australia to learn English and improve web development skills.
        </p>
        <Link href="/about" className={styles.more}>more about me</Link>
      </section>
      
      <section className={styles.content}>
        <h2 className={styles.subtitle}>Work</h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>タイトル</h3>
            <figure className={styles.item_img}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></figure>
            <p className={styles.item_desc}>テキストテキストテキストテキストテキスト</p>
            <span className={styles.item_more}>comming soon</span>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>Portfolio website</h3>
            <figure className={styles.item_img}><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></figure>
            <p className={styles.item_desc}>テキストテキストテキストテキストテキスト</p>
            <span className={styles.item_more}>comming soon</span>
          </div>
        </div>
      </section>
    </>
  )
}
