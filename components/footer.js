import Link from "next/link";
import styles from 'styles/common/layout/Footer.module.scss';

export default function Footer() {
  return (
  <footer className={styles.footer}>
    <small className={styles.copyright}>&copy; 2023 rinaofk</small>
    <div className={styles.links}>
        <a href="mailto:xxx@gmail.com" target="_blank">xxx@gmail.com</a>
        <a href="https://github.com/rixcx" target="_blank">Github</a>
        <a href="/" target="_blank">Linkedin</a>
        <a href="/" target="_blank">Resume</a>
    </div>
  </footer>
  )
}