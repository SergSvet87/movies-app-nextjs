
import Image from 'next/image';

import Navbar from './Navbar';
import Profile from './Profile';
import Search from './Search';

import styles from '../styles/Header.module.scss';

const NAVIGATION = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Team', path: '/team' },
]

const GENRES = [
  { id: 1, title: 'action', path: '/movies/action' },
  { id: 2, title: 'adventure', path: '/movies/adventure' },
  { id: 3, title: 'animation', path: '/movies/animation' },
  { id: 4, title: 'biography', path: '/movies/biography' },
  { id: 5, title: 'comedy', path: '/movies/comedy' },
  { id: 6, title: 'crime', path: '/movies/crime' },
  { id: 7, title: 'documentary', path: '/movies/documentary' },
  { id: 8, title: 'drama', path: '/movies/drama' },
  { id: 9, title: 'family', path: '/movies/family' },
  { id: 10, title: 'fantasy', path: '/movies/fantasy' },
  { id: 11, title: 'history', path: '/movies/history' },
  { id: 12, title: 'horror', path: '/movies/horror' },
  { id: 13, title: 'music', path: '/movies/music' },
  { id: 14, title: 'musical', path: '/movies/musical' },
  { id: 15, title: 'mystery', path: '/movies/mystery' },
  { id: 16, title: 'romance', path: '/movies/romance' },
  { id: 17, title: 'sci-Fi', path: '/movies/sci-Fi' },
  { id: 18, title: 'short Film', path: '/movies/short Film' },
  { id: 19, title: 'sport', path: '/movies/sport' },
  { id: 20, title: 'superhero', path: '/movies/superhero' },
  { id: 21, title: 'thriller', path: '/movies/thriller' },
  { id: 22, title: 'war', path: '/movies/war' },
  { id: 23, title: 'western', path: '/movies/western' },
  { id: 24, title: 'film Noir', path: '/movies/film Noir' },
  { id: 25, title: 'game Show', path: '/movies/game Show' },
  { id: 26, title: 'reality-TV', path: '/movies/reality-TV' },
  { id: 27, title: 'news', path: '/movies/news' },
];

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.top}>

        <div className={styles.logo}>
          <Image src='/logo.png' alt="My Logo" width={50} height={40} />
          <span>M</span>OVIE<span>S</span>
        </div>
        <Navbar items={NAVIGATION} />
        <Profile />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomGenres}>
          <Navbar items={GENRES} />
        </div>
        <Search />
      </div>
    </div>
  </header>
)

export default Header;