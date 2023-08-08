import Image from 'next/image'
import Link from "next/link";
import styles from 'styles/pages/About.module.scss'

export default function About() {
  return (
    <>
      <h1 className={styles.ttl}>About me</h1>
      <section className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.intro_txt}>
            <h2 className={styles.ttl}></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque placerat enim, tristique dictum sapien suscipit vel. </p>
            <p>Phasellus sollicitudin scelerisque arcu, quis dictum purus auctor id. Phasellus vitae dictum mi. Donec eget finibus dui, a vulputate erat. Ut commodo vulputate purus, sed tincidunt nulla semper quis.</p>
          </div>
          <figure className={styles.intro_img}><Image src="/450x500.png" alt="me" width={430} height={400} /></figure>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.wrap}>
          <h2 className={styles.wrap_ttl}>💻 Skills</h2>
          <div className={styles.wrap_detail}>
            <div>
              <p>Adobe XD ・ Adobe Photoshop ・ Adobe Illustrator ・ Adobe Lightroom ・ Sublime text ・ VSCode ・ MAMP ・ Gulp ・ Source tree</p>
              <p className={styles.wrap_beginner}>Beginner : Figma ・ Docker ・ github</p>
            </div>
            <div>
              <p>HTML/CSS ・ Sass(SCSS) ・ Javascript ・ jQuery ・ PHP ・ CakePHP</p>
              <p className={styles.wrap_beginner}>Beginner : Git ・ Next.js ・ Laravel ・ WordPress</p>
            </div>
            <div><p>Project management ・ Wireframing ・ Web design ・ Web development</p></div>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.wrap}>
          <h2 className={styles.wrap_ttl}>📗 Previously</h2>
          <div className={styles.wrap_detail}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque placerat enim, tristique dictum sapien suscipit vel.</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.wrap}>
          <h2 className={styles.wrap_ttl}>💓 Loves</h2>
          <div className={styles.wrap_detail}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque placerat enim, tristique dictum sapien suscipit vel.</p>
          </div>
        </div>
      </section>
    </>
  )
}
