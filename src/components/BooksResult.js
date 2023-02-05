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
          return (<div className="text-lg m-8" key={index}>
              <Link to={{ pathname: '/book-isbn=/' + item.ISBN_10, state: {img: item.img, title: item.title, authors: item.authors, ISBN: item.ISBN_10} }}>
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
            </Link>
          </div>)
        })}
      </div>
    </div>
  )
})

export function Detail2(props) {
  // URL parameter の受け取り
  const params = useParams();
  const id = params.id;

  const location = useLocation();
  const state = location.state;

  return (
      <div>
          <h1>詳細ページ</h1>
          <div>
              <img class="img" src={'/book/' + state.img} width="80px" />
          </div>
          <div>
              <p className="title">タイトル: {state.title}</p>
              <p class="authors">著者: {state.authors}</p>
          </div>
          <p>識別番号: {state.id}</p>
          <Link to="/">もどる</Link>
      </div>
  );

}
export default BooksResult;