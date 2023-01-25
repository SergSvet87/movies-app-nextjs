import { FC, ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from '../styles/Home.module.scss';

type layoutProps = {
  children: ReactNode,
};

const Layout: FC<layoutProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.page}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
