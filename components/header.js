import Link from "next/link";
import Nav from 'components/nav'
import styles from 'styles/common/layout/Header.module.scss';

export default function Header() {
  return (
  <header className={styles.header}>
    <div><Link href="/">R.</Link></div>
    <Nav />
  </header>
  )
}