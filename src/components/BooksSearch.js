import useSearch from "../hooks/useSearch";
import BooksResult from "../components/BooksResult";
import { useEffect } from "react";
import { Input } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const BooksSearch = (props) => {

  const { handleNewBooks, searchBooks, value, items } = useSearch();

  useEffect(() => {
    document.getElementById("search-input").focus();
  }, []);
 
  return (
    <div>
      <form onSubmit={searchBooks} class="d-flex">
        <input id="search-input" onChange={handleNewBooks} value={value} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onclick={handleNewBooks} value={value} class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <BooksResult items={items} />
    </div>
  );

}
export default BooksSearch;