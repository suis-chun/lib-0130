import { memo } from "react";
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

const BooksResult = memo((props) => {

  const { items } = props;

  return (
    <div>
      <div className="mb-16">
        {items.map((item, index) => {
          return (<div className="text-lg m-8"
            key={index}>
            <a href={item.link} target='_blank' >
              <img src={item.image} />
              <div className='p16'>
                <Heading as='h2' size='xl' mt='10'>{item.title}</Heading>
                <p>{item.authors}</p>
                {/*
                <p>{item.description}</p>
                ISBN_10: {item.ISBN_10}
                ISBN_13: {item.ISBN_13}
                */}
              </div>
            </a>
          </div>)
        })}
      </div>
    </div>
  )
})
export default BooksResult;