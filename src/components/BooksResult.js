import { memo } from "react";
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";



const BooksResult = memo((props) => {

  const { items } = props;


  return (
    <div>
      <div className="mb-16">
        {items.map((item, index) => {
          return (
          <div className="text-lg m-8 bookcard" key={index}>
            <Link to={'/book-isbn=/' + item.ISBN_10} state={{ img: item.image, title: item.title, authors: item.authors, description: item.description, ISBN10: item.ISBN_10, ISBN13: item.ISBN_13 }}>
              <img src={item.image} />
              <div className='p16'>
                <Heading as='h2' size='xl' mt='10'>{item.title}</Heading>
                <p>{item.authors}</p>

                {/*<p>{item.description}
                  ISBN_10: {item.ISBN_10}
        ISBN_13: {item.ISBN_13}</p>*/}
              </div>
            </Link>
          </div>
          )
        })}
      </div>
    </div>
  )
})

export function Detail2(props) {
  // URL parameter の受け取り
  const params = useParams();
  const id = params.id;

  console.log(id);

  const location = useLocation();
  const state = location.state;

  console.log(state)

  return (
    <div>
      <h1>詳細ページ</h1>
      <div>
        <img class="img" src={state.img} width="80px" />
      </div>
      <div>
        <p className="title">タイトル: {state.title}</p>
        <p class="authors">著者: {state.authors}</p>
        <button>amazonで見る</button>
        <button>楽天で見る</button>
        <p>説明: {state.description}</p>
        <p>ISBN10: {state.ISBN10}</p>
        <p>ISBN13: {state.ISBN13}</p>
      </div>

      <Link to="/">もどる</Link>
    </div>
  );

}
export default BooksResult;