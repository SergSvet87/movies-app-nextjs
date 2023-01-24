import Head from 'next/head';

import Image from 'next/image';
import Heading from '../components/Heading';
// import SocialIcons from '../components/SocialIcons';

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
        href: 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BhcBiHBFlT5yVayJn2EHCdQ%3D%3D',
        size: 25,
      },
      {
        _id: 2,
        name: 'telegram',
        href: 'https://t.me/Serg_svet',
        size: 28,
      },
      {
        _id: 3,
        name: 'gmail',
        href: 'mailto:svitlychnyi1905@gmail.com',
        size: 30,
      },
      {
        _id: 4,
        name: 'github',
        href: 'https://github.com/SergSvet87',
        size: 25,
      },
      {
        _id: 5,
        name: 'viber',
        href: 'viber://chat?number=%2B380976157541',
        size: 28,
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
      <Heading className="title-h1" text='Our Team' />
      <p className={styles.text}>
        We are small but effective and friendly team that can implement
        necessary functionality!
      </p>
      <ul className={styles.list}>
        {team.map((person) => (
          <li className={styles.item} key={person.id}>
            <Image src={person.image} alt={person.name} width={260} height={330} />
            <h3 className="title-h3">{person.name}</h3>
            <p>{person.position}</p>
            <p>Links to social networks:</p>
            {/* <SocialIcons icons={person.icons} /> */}
          </li>
        ))}
      </ul>
    </section>
  </div>
)

export default Team;