import Image from 'next/image';

import Navbar from './Navbar';
import Profile from './Profile';
import Search from './Search';

import styles from '../styles/Header.module.scss';

const NAVIGATION = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Team', path: '/team' },
];

const GENRES = [
  { id: 1, title: 'action', path: '/movies/genres/action' },
  { id: 2, title: 'adventure', path: '/movies/genres/adventure' },
  { id: 3, title: 'animation', path: '/movies/genres/animation' },
  { id: 4, title: 'biography', path: '/movies/genres/biography' },
  { id: 5, title: 'comedy', path: '/movies/genres/comedy' },
  { id: 6, title: 'crime', path: '/movies/genres/crime' },
  { id: 7, title: 'documentary', path: '/movies/genres/documentary' },
  { id: 8, title: 'drama', path: '/movies/genres/drama' },
  { id: 9, title: 'family', path: '/movies/genres/family' },
  { id: 10, title: 'fantasy', path: '/movies/genres/fantasy' },
  { id: 11, title: 'history', path: '/movies/genres/history' },
  { id: 12, title: 'horror', path: '/movies/genres/horror' },
  { id: 13, title: 'music', path: '/movies/genres/music' },
  { id: 14, title: 'musical', path: '/movies/genres/musical' },
  { id: 15, title: 'mystery', path: '/movies/genres/mystery' },
  { id: 16, title: 'romance', path: '/movies/genres/romance' },
  { id: 17, title: 'sci-fi', path: '/movies/genres/sci-fi' },
  { id: 18, title: 'short-film', path: '/movies/genres/short-film' },
  { id: 19, title: 'sport', path: '/movies/genres/sport' },
  { id: 20, title: 'superhero', path: '/movies/genres/superhero' },
  { id: 21, title: 'thriller', path: '/movies/genres/thriller' },
  { id: 22, title: 'war', path: '/movies/genres/war' },
  { id: 23, title: 'western', path: '/movies/genres/western' },
  { id: 24, title: 'film-noir', path: '/movies/genres/film-noir' },
  { id: 25, title: 'game-show', path: '/movies/genres/game-show' },
  { id: 26, title: 'reality-tv', path: '/movies/genres/reality-tv' },
  { id: 27, title: 'news', path: '/movies/genres/news' },
];

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.top}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="My Logo" width={50} height={40} />
          <span>M</span>OVIE<span>S</span>
        </div>
        <Navbar navItems={NAVIGATION} />
        <Profile />
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomGenres}>
          <Navbar navItems={GENRES} />
        </div>
        <Search />
      </div>
    </div>
  </header>
);

export default Header;
