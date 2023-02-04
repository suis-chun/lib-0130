import { useState } from 'react';

const useSearch = () => {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleNewBooks = (event) => {
    setValue(event.target.value);
  };

  const searchBooks = async (event) => {
    event.preventDefault();
    if (value === '') return;
    const endpoint = 'https://www.googleapis.com/books/v1';
    const res = await fetch(`${endpoint}/volumes?q=${value}`);
    const data = await res.json();
    const dataFormat = data.items.map(item => {
    const Info = item.volumeInfo;
    const ISBN_10 = Info.industryIdentifiers.find((val) => val.type === "ISBN_10");
    const ISBN_13 = Info.industryIdentifiers.find((val) => val.type === "ISBN_13");
    return {
      title: Info.title,
      authors: Info.authors,
      description: Info.description,
      link: Info.infoLink,
      image: Info.imageLinks ? Info.imageLinks.smallThumbnail : '',
      ISBN_10: ISBN_10 ? ISBN_10.identifier : '',
      ISBN_13: ISBN_13 ? ISBN_13.identifier : '', 
      };
    });
    setItems(dataFormat);
  }

  return {handleNewBooks,searchBooks,items,value}

}
export default useSearch;