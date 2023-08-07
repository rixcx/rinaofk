import Link from "next/link";
import styles from 'styles/common/layout/Nav.module.scss';

export default function Nav() {
  return (
    <>
      <div className={styles.nav}>
        <button  className={styles.toggle} type="button"></button>
        <nav className={styles.lists}>
          <ul>
            <li><Link href="#work">Work</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}