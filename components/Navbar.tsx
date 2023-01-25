import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/Navbar.module.scss';

interface INavbar {
  navItems: {
    id: number,
    title: string,
    path: string,
  }[];
}
const Navbar = ({ navItems }: INavbar) => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navItems.map((item) => (
          <li className={styles.item} key={item.id}>
            <Link
              className={pathname === item.path ? styles.active : null}
              href={`${item.path}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
