import { useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import Movies from "./movies";
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";

import styles from '../styles/Home.module.scss';

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://yts.mx/api/v2/list_movies.json?limit=23&sort_by=year');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.data ?? null },
  }
}

const PAGE = 1;

const Home = ({ data }) => {
  const [page, setPage] = useState(PAGE);

  const movieLimit = data.limit;
  const movieCount = data.movie_count;
  const movieId = data.movies.length === 1 ? data.movies[0].id : data.movies[2].id;
  const pageQty = Math.ceil(movieCount / movieLimit);

  // let movieLimit = 1;
  // let movieCount = 0;
  // let movieId = 0;
  // let pageQty = 1;

  // if (data !== undefined) {
  //   movieLimit = data.limit;
  //   movieCount = data.movie_count;
  //   movieId = data.movies[2].id;
  // }

  // pageQty = Math.ceil(movieCount / movieLimit);

  return (
    <div className="container">
      <Slider />
      <div className={styles.moviesWrapper}>
        <Movies filmItems={data.movies} />
        <Sidebar movieId={movieId} />
      </div>
      <Stack spacing={2}>
        {pageQty && (
          <Pagination
            color="primary"
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
            size="large"
            sx={{ marginY: 3, marginX: 'auto' }}
            renderItem={(item) => (
              <PaginationItem
                color="primary"
                component={Link}
                href={`/movies/pages/${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </div>
  )
}

export default Home