import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Home.module.scss';

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.page}>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;