import { useState } from "react";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import Movies from "../../index";
import Sidebar from "../../../../components/Sidebar";

import styles from '../../../../styles/Home.module.scss';

export const getServerSideProps = async (context) => {
  const { genre, page } = context.params;
  console.log(context.params);
  const response = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year&genre=${genre}&page=${page}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.data ?? null }
  }
};

const PAGE = 1;

const Page = ({ data }) => {
  const [page, setPage] = useState(PAGE);
  

  const movieLimit = data.limit;
  const movieCount = data.movie_count;
  const movieId = data.movies[0].id;
  const pageQty = Math.ceil(movieCount / movieLimit);

  return (
    <div className="container">
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
                href={`/movies/genres/:genre/pages/:${item.page}`}
                {...item}
              />
            )}
          />
        )}
      </Stack>
    </div>
  )
}

export default Page