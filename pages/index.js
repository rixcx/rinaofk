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
        <p className={styles.desc}>I worked as a web designer and web engineer in Japan from April 2017 to August 2023.<br />Currently, I'm living in Australia, learning English and improving my web development skills.</p>
        <Link href="/about" className={styles.more}>more about me</Link>
      </section>
      
      <section className={styles.content}>
        <h2 className={styles.subtitle}>Work</h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>ToDo List</h3>
            <figure className={styles.item_img}><Image src="/works/img_works_todo-list-js.png" alt="Vercel Logo" width={430} height={221} /></figure>
            <p className={styles.item_desc}>This is a ToDoList application produced in Vanilla JS to learn the basics. ToDoList is a great way to learn the basics. Next I plan to build it in React to learn the differences between each.</p>
            <div className={styles.item_more}><span>comming soon</span></div>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>r.blog</h3>
            <figure className={styles.item_img}><Image src="/works/img_works_rblog.png" alt="Vercel Logo" width={430} height={221} /></figure>
            <p className={styles.item_desc}>I launched a blog adopt Next.js and Docker Compose to learn more these tools. In particular, it helped me a lot in understanding Docker. I irregularly post technical articles.</p>
            <p className={styles.item_link}><a href="https://rblog-and-rix.vercel.app/" target="_blank">rblog-and-rix.vercel.app</a><span>*Japanese only</span></p>
            <div className={styles.item_more}><span>comming soon</span></div>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>Portfolio site</h3>
            <figure className={styles.item_img}><Image src="/works/img_works_rix.png" alt="Portfolio site" width={430} height={221} /></figure>
            <p className={styles.item_desc}>To gain experience of using tools, I built my portfolio site with VSCode, Git(CUI), GitHub, GitHub Pages and Docker.</p>
            <div className={styles.item_more}><span>comming soon</span></div>
          </div>
          <div className={styles.item}>
            <h3 className={styles.item_ttl}>Previously work</h3>
            <figure className={styles.item_img}><Image src="/works/000.png" alt="Previously" width={430} height={221} /></figure>
            <p className={styles.item_desc}>*Details are withheld for confidentiality reasons.<br />I created a website for a women's gym. I designed information and helped attract members by organizing the prices and the gym's menu. I also supervised the photo used on the site.</p>
          </div>
        </div>
      </section>
    </>
  )
}
