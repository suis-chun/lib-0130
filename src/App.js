import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './Header';
import Home from './routes/home';
import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import React, { useState, useEffect } from "react";
import './App.css';
import Setting from './routes/setting';
import Register from "./routes/Register";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Newbook from "./routes/newbook";
import { BookList, Detail } from './routes/BookList';



function App() {
  const [text, setValueText] = useState("");


  return (
    <div className="App">

      <BrowserRouter>
        <div>
          <Header />
          
        </div>
        
        <Routes>
          <Route path="/header/" element={<Header />} />
          <Route path="/search/" element={
            //ここでデータの受け渡し！
            <Search exText="sended by app.js" />
          } />
          <Route path="/contact/" element={<Contact message="Hello Contact" />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/setting/" element={<Setting />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/mypage/`} element={<Mypage />} />
          <Route path={`/newbook/`} element={<Newbook />} />
          <Route path="/" element={<Home />} />
          <Route path="/newbook2/" element={<BookList />} />
          <Route path="/detail/:id" element={<Detail />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}



const Search = (props) => {
  /* ↓state変数「text」を定義 */
  const [text, setText] = useState("");

  /* ↓state変数「addText」を定義 */
  const [addText, setAddText] = useState("");

  /* ↓関数onClickAddTextを定義 */
  const onClickAddText = () => {
    setAddText(text);
    setText("");
  }

  //親コンポーネントからもらった関数にformTextを入れて返す。

  return (
    <div>
      <h2>Search</h2>
      <h2>蔵書検索</h2>
      <span className="border-top"></span>
      <h1>あ</h1>
      <h1>{props.exText}</h1>

      <div className="container-fluid">
        <div className="header">
          <div className="row">
            <div className='col-1'>
              <img className="top-icon" src="settings-5666.svg" />
            </div>
            <div className='col-11'>
              <div className="input-group">
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} className="form-control" placeholder="キーワードを入力" />
                <button className="btn btn-outline-success" onClick={onClickAddText} type="button" id="button-addon2"><i class="fas fa-search"></i> 検索</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>{text}</h1>
      <h1>{addText}</h1>
    </div>
  )
}

export default App;