import { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from './Movie';
import Heading from './Heading';

import styles from '../styles/Sidebar.module.scss';

export const getStaticProps = async () => {
  const response = await fetch();
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { films: data.data.movies },
  }
}

const Sidebar = ({ movieId }) => {
  const [recommendMovies, setRecommendMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`).then(
      ({
        data: {
          data: { movies },
        },
      }) => {
        setRecommendMovies(movies);
      }
    );
  }, [movieId]);

  const moviesRecom = recommendMovies.filter(
    (film) =>
      film.summary !== '' &&
      film.medium_cover_image !== '404' &&
      film.rating !== 0
  );

  return (
    <section className={styles.sidebar}>
      <Heading className="title-h3" tag='h3' text='Recommended movies:'></Heading>
      <ul className={styles.list}>
        {moviesRecom.map((movie) => (
          <li className={styles.movie} key={movie.id}>
            <Movie
              id={movie.id}
              year={movie.year}
              rating={movie.rating}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;