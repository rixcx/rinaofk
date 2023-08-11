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
            <h2 className={styles.intro_ttl}>Rina Ofk</h2>
            <p>I am a Web designer and Web developer.</p>
            <p>I graduated from Osaka University of Arts. After that, I joined a website design company as a web designer, where I experienced the website building process - meeting with clients, planning, designing, coding, and publishing websites.<br />After 4 years, I transitioned to the web development section and worked on backend tasks, such as implementing functions in according to client's requirements.</p>
            <p>I believe that Web Design is solving existing problems to solutions with appropriate UI and providing a good UX for users and clients. I work with a wealth of practical experience and this thinking.</p>
            <p>The Knowledge should be acquired is vast. I have a growth mindset, and seeking opportunities to expand my knowledge and skills as a web developer.</p>
          </div>
          <figure className={styles.intro_img}><Image src="/about/img_about.png" alt="me" width={720} height={760} /></figure>
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
            <p>I studied design principles, methods, and basis of web development in the Department of Information Design at Osaka University of Arts.</p>
            <p>In 2017, I started working at a website design company in Osaka. As a web designer, sometimes as a director and corder, I asked clients about requirements, organized issues, controlled schedules, created prototyping, designed, and developed. I have experience in leading a team of 5 people to renew websites with 100+ pages.</p>
            <p>In 2021, I transitioned to the web development section, where I gained experience in backend skills using PHP by implementing functions according to client's requirements and fixing bugs on websites. Additionally, I made contributions to the team's education by holding workshops on basic application knowledge and performing coding reviews.</p>
            <p>Currently, I'm living in Australia, learning English and improving my web development skills.</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.wrap}>
          <h2 className={styles.wrap_ttl}>💓 Loves</h2>
          <div className={styles.wrap_detail}>
            <p>Travel(domestic, overseas, both) ・ Spicy foods ・ Games ・ JoJo's Bizarre Adventure ・ Suica's Penguin・ Stray kids・ Family(father, mother, two little brothers, little sister, and two dogs!)</p>
          </div>
        </div>
      </section>
    </>
  )
}
