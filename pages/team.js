import Head from 'next/head';

import Image from 'next/image';
import Heading from '../components/Heading';
import SocialIcons from '../components/SocialIcons';

import styles from '../styles/Team.module.scss';

export const team = [
  {
    id: 1,
    name: 'Serhii Svitlychnyi',
    image: '/team/Serhii_Svit.png',
    position: 'Designer & Front-End Developer',
    icons: [
      {
        _id: 1,
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/serhii-svitlychnyi',
        path: 'icons/social-icons/linkedin.svg',
        size: 24,
      },
      {
        _id: 2,
        name: 'telegram',
        href: 'https://t.me/Serg_svet',
        path: 'icons/social-icons/telegram.svg',
        size: 28,
      },
      {
        _id: 3,
        name: 'gmail',
        href: 'mailto:svitlychnyi1905@gmail.com',
        path: 'icons/social-icons/gmail.svg',
        size: 30,
      },
      {
        _id: 4,
        name: 'github',
        href: 'https://github.com/SergSvet87',
        path: 'icons/social-icons/github.svg',
        size: 30,
      },
      {
        _id: 5,
        name: 'viber',
        href: 'viber://chat?number=%2B380976157541',
        path: 'icons/social-icons/viber.svg',
        size: 30,
      },
    ],
  },
];

const Team = () => (
  <div className="container">
    <Head>
      <title>Team</title>
    </Head>
    <section className={styles.team}>
      <Heading className="title-h1" text="Our Team" />
      <p className={styles.text}>
        We are small but effective and friendly team that can implement
        necessary functionality!
      </p>
      <ul className={styles.list}>
        {team.map((person) => (
          <li className={styles.item} key={person.id}>
            <Image
              src={person.image}
              alt={person.name}
              width={260}
              height={330}
            />
            <h3 className="title-h3">{person.name}</h3>
            <p>{person.position}</p>
            <p>Links to social networks:</p>
            <SocialIcons icons={person.icons} />
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Team;
