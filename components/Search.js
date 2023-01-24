import { useState } from 'react';
import Link from 'next/link';

import styles from '../styles/Search.module.scss';

const Search = () => {
  const [textSearch, setTextSearch] = useState('');

  function onSubmitHandler(e) {
    e.preventDefault();
    setTextSearch(e.target.value);
    e.target.value = '';
  }

  return (
    <div className={styles.search}>
      <form>
        <i className="bx bx-search-alt"></i>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="I`m searching for..."
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
          onBlur={(e) => onSubmitHandler(e)}
        />
        <Link href={`/movies/${textSearch}`}>
          <button type="button">Search</button>
        </Link>
      </form>
      <i className="bx bx-customize"></i>
    </div>
  );
};

export default Search;
