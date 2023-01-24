import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Heading from '../components/Heading';

import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <section id="not-found-page" className={styles.notFound}>
      <Head>
        <title>Error</title>
      </Head>
      <div className="container">
        <div className={styles.image}>
          <Image src='/404/dubl.png' alt="not found page 404" width={500} height={450} />

          <Heading className={styles.title} text='404' />
        </div>

        <div className={styles.text}>
          <Heading className="title-h2" tag='h2' text='Oops!' />

          <p>Sorry, there was a transition to a non-existent address.</p>

          <p>
            Please return to the main page via the
            <Link className={styles.link} href='/'>
              Home!
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Error;