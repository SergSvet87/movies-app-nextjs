import Head from 'next/head';
import { GetServerSideProps } from 'next';

import MovieDetails from '../../components/MovieDetails';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(`https://yts.mx/api/v2/movie_details.json?with_images=true&with_cast=true&with_images=true&movie_id=${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { movie: data.data.movie ?? null },
  }
};

const Movie = ({ movie }) => {

  return (
    <div className='container'>
      <Head>
        <title>Movie</title>
      </Head>
      <MovieDetails movie={movie} />
    </div>
  );
}

export default Movie;