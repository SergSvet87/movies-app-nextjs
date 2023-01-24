import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Movie.module.scss';

const Movie = ({ id, year, rating, title, poster, genres, summary }) => (
  <>
    <div className={styles.poster}>
      <p className={styles.rating}>{rating} / 10</p>
      <Image src={poster} alt={title} title={title} width={240} height={350} priority={true} />
      <p className={styles.year}>{year}</p>
    </div>
    <div className={styles.text}>
      <h4 className={styles.title}>
        <Link href={`/movies/${id}`}>
          {title}
        </Link>
      </h4>
      <ul className={styles.genres}>
        {genres.map((genre, index) => (
          <li className={styles.genre} key={index}>
            {genre}
          </li>
        ))}
      </ul>
      {summary ? <div className={styles.summary}>{summary.slice(0, 260)}...</div> : null}
    </div>
  </>
)

export default Movie;