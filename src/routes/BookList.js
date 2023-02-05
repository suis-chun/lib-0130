import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import './BookList.css'

const newbooks2data = [
    { id: 1000, title: "川のほとりに立つものは", writer: "ああ", isbn: "0000", img: "1.jpg" },
    { id: 1, title: "君のクイズ", writer: "いい", isbn: "1111", img: "2.jpg" },
    { id: 2, title: "宙ごはん", writer: "うう", isbn: "2222", img: "3.jpg" },
    { id: 3, title: "月の立つ林で", writer: "ええ", isbn: "3333", img: "4.jpg" },
    { id: 4, title: "汝、星のごとく", writer: "おお", isbn: "4444", img: "5.jpg" },
    { id: 5, title: "方舟", writer: "かか", isbn: "5555", img: "6.jpg" },
]

export function BookList(props) {
    const list = newbooks2data.map(
        (item) => {
            return (
                <div>
                    
                    <Link to={'/detail-number/' + item.id} className="buleline">
                        <div className="flex">
                            <img className="book-img" src={'/book/' + item.img} />
                            <p>{item.title}</p>
                        </div>
                    </Link>
                </div>
            )
        }
    )
    return (
        <div>
            <h1>新着</h1>
            <div>{list}</div>
        </div>
    )
}

export function Detail(props) {
    // URL parameter の受け取り
    const params = useParams();
    const id = params.id;

    
    const initialBook = newbooks2data.find((item)=>item.id.toString()===id)
    const [book, setBook] = useState(initialBook);

    return (
        <div>
            <h1>詳細ページ</h1>
            <div>
                <div className="flex3">
                <img class="img0" src={'/book/' + book.img} />
                <div className="flex4">
                    <p className="title">タイトル: {book.title}</p>
                    <p class="authors">著者: {book.writer}</p>
                </div>
              </div>
            </div>
            <p>識別番号: {book.id}</p>
            <Link to="/">もどる</Link>
        </div>
    );

}

export default BookList;

