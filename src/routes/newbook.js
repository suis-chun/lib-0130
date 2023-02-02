import './newbook.css';
import BooksSearch from '../components/BooksSearch';
import { ChakraProvider } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';


function Newbook(props) {  
  return (
    <ChakraProvider>
      <div className="App">
        <Container maxW='container.sm'>
          <BooksSearch />
        </Container>
      </div>
    </ChakraProvider>
  );
}

export default Newbook;