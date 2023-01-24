import Head from 'next/head';

import Movie from '../../../components/Movie';
import Heading from '../../../components/Heading';

import styles from '../../styles/Movies.module.scss';

// export const getServerSideProps = async (context) => {
//   const { genre } = context.params;

//   const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&genre=${genre}`);
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { movies: data.data.movie },
//   }
// };

const Movies = ({ movies }) => {

  return (
    <section className={styles.movies}>
    <Heading className="title-h2" tag='h2' text='Movies:'></Heading>
    <ul className={styles.list}>
      {movies && movies.map((movie) => (
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
}

export default Movies;