import Header from 'components/header'
import Footer from 'components/footer'
import styles from 'styles/common/layout/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.body}>
        <Header />
          <main className={styles.main}>
              {children}
          </main>
        <Footer />
      </div>
    </>
  )
}