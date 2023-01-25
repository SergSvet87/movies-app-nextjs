// import Head from 'next/head';

import Movie from '../../components/Movie';
import Heading from '../../components/Heading';

import styles from '../../styles/Movies.module.scss';

interface IMovies {
  filmItems: {
    id: number,
    year: number,
    rating: number,
    title: string,
    poster: string,
    genres: [],
    summary: string,
    medium_cover_image: string,
  }[];
}

const Movies = ({ filmItems }: IMovies) => {
  const movies = filmItems?.filter(
    (film) =>
      film.summary !== '' &&
      film.medium_cover_image !== '404' &&
      film.rating !== 0
  );

  return (
    <section className={styles.movies}>
      <Heading className="title-h2" tag="h2" text="Movies:"></Heading>
      <ul className={styles.list}>
        {movies &&
          movies.map((movie) => (
            <li className={styles.movie} key={movie.id}>
              <Movie
                id={movie.id}
                year={movie.year}
                rating={movie.rating}
                title={movie.title}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                summary={null}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Movies;
