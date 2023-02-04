import { Link, useParams } from 'react-router-dom';
import React, { useState } from 'react';

const newbooks2data = [
    { id: 0, title: "あ", writer: "ああ", isbn: "0000", img: "1.jpg" },
    { id: 1, title: "い", writer: "いい", isbn: "1111", img: "2.jpg" },
    { id: 2, title: "う", writer: "うう", isbn: "2222", img: "3.jpg" },
    { id: 3, title: "え", writer: "ええ", isbn: "3333", img: "4.jpg" },
    { id: 4, title: "お", writer: "おお", isbn: "4444", img: "5.jpg" },
    { id: 5, title: "か", writer: "かか", isbn: "5555", img: "6.jpg" },
]

export function BookList(props) {
    const list = newbooks2data.map(
        (item) => {
            return (
                <div>
                    <Link to={'/detail/' + item.id}>
                        <img className="book-img" src={'/book/' + item.img} />
                        <p>{item.title}</p>
                    </Link>
                </div>
            )
        }
    )
    return (
        <div>
            <div>{list}</div>
        </div>
    )
}


export function Detail(props) {
    // URL parameter の受け取り
    const params = useParams();
    const id = params.id;

    const [item, setItem] = useState(newbooks2data); //itemを定義、初期値data
    const [comtext, setCom] = useState('');
    
    // const [stock, setStock] = useState(newbooks2data[stock]);

    function handleChange(event) {
        setCom(event.target.value); //コメント１文字つど保存
    }

    function handleSubmit(event) {
        let copy = Object.assign({}, item);   //   コメントを送信  
        copy.comment.push(comtext);
        setItem(copy);
        event.preventDefault();
    }

    function handleButton(event) {
        console.log("button pushed!");

        /* クラスコンポーネントの場合
            let copy = this.state.goods;
            copy[this.state.selected].stock--;  
            this.setState({ goods: copy });     */

        let copy = Object.assign({}, item);  //コピーを定義
        copy.stock--;  //stockを-1
        setItem(copy);     //上書き保存
        copy.sum="ご購入ありがとうございます！"
        event.preventDefault();
    }
    
    const comments = item.comment.map((item) => {
        return (<p>{item}</p>)
    })

    return (
        <div>

            <h1>詳細ページです</h1>

            <a>
                <div class="carddd">
                    <div class="imgmargin">
                        <img class="img" src={'/images/' + item.img + '.jpg'} width="80px" />
                    </div>
                    <div class="text">
                        <p className="title"><p>{item.name}</p></p>
                        <p class="price">{'¥' + item.price + '円'}</p>
                    </div>
                </div>
            </a>


            <p>識別番号: {item.id}</p>
            <p className="s-name">{item.name}</p>
            <p className="s-zaiko">在庫: {item.stock}</p>
            
            <button className="custom-btn btn-5" onClick={
                handleButton
            }  >購入</button>

            <p className="s-ty">{item.sum}</p>
            <p className="">詳細な説明: {item.desc}</p>
            
            
            <p>{comments}</p>

            <form onSubmit={handleSubmit}>
                <label>コメント
                    <input type="text" value={comtext} onChange={handleChange} />
                </label>
                <input type="submit" value="投稿" />
            </form>
            <Link to="/">もどる</Link>
            <div class="s-air">

            </div>
        </div>
    );

}

