import { memo } from "react";
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Libbooks from "./Libbooks";
import Geo2 from "./Geo2";
import './BooksResults.css';



const BooksResult = memo((props) => {

  const { items } = props;




  return (
    <div>
      <div className="mb-16">
        {items.map((item, index) => {
          return (
          <div className="text-lg m-8 bookcard" key={index}>
            <Link to={'/book-isbn=/' + item.ISBN_10} state={{ img: item.image, title: item.title, authors: item.authors, description: item.description, ISBN10: item.ISBN_10, ISBN13: item.ISBN_13 }}>
              <div class="flex2">
                <div className="ggg">
                  <img src={item.image} className="Resultsimage"/>
                </div>
              <div className='p16'>
                <Heading as='h2' size='xl' mt='10'><div className="ddd0">{item.title}</div></Heading>
                <p className="ddd0">{item.authors}</p>

                {/*<p>{item.description}
                  ISBN_10: {item.ISBN_10}
        ISBN_13: {item.ISBN_13}</p>*/}
              </div>
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
      <h1 className="detail0">詳細ページ</h1>
      <div className="waku">
        <div className="flex3">
        <img className="img0" src={state.img} />
      
      <div className="flex4">
        <p className="title">タイトル: {state.title}</p>
        <p class="authors">著者: {state.authors}</p>
        </div>
      </div>
        <div className="amazon">
          <a href={'https://www.amazon.co.jp/s?k=' + state.title} >
          <button className="a">amazonで見る</button></a>
          <button className="b">楽天で見る</button>
        </div>
        <p className="fff">説明: {state.description}</p>
        <p>ISBN10: {state.ISBN10}</p>
        <p>ISBN13: {state.ISBN13}</p>
      </div>
  

      <Geo2 ISBN={state.ISBN10} />
      

      <Link to="/">もどる</Link>
    </div>
  );

}
export default BooksResult;