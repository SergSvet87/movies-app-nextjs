import Link from 'next/link';

import styles from '../styles/Profile.module.scss';

const Profile = () => (
  <nav className={styles.profile}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href='/registration'>UserName</Link>
      </li>
    </ul>
  </nav>
)

export default Profile;