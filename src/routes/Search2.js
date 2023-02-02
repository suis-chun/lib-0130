import useSearch from "../hooks/useSearch";
import BooksResult from "../components/BooksResult";
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';

const Search2 = () => {

  const { handleNewBooks, searchBooks, value, items } = useSearch();

  return (
    <div>
      <Heading as='h1' size='xl' mb='5'>下で検索</Heading>
      <Link to="/newbook/">
        <form onSubmit={searchBooks} class="d-flex">
          <input onChange={handleNewBooks} value={value} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button onclick={handleNewBooks} value={value} class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </Link>
    </div>
  );

}
export default Search2;