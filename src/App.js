import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './routes/home';

import Contact from './routes/contact';
import NoMatch from './routes/nomatch';
import React, { useState } from "react";
import './App.css';
import Setting from './routes/setting';
import Register from "./routes/Register";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Newbook from "./routes/newbook";




function App() {
  const[text,setValueText]= useState("");
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/setting">Setting</Link></li>
          <li><Link to="/register/">register</Link></li>
          <li><Link to="/login/">login</Link></li>
          <li><Link to="/mypage/">mypage</Link></li>
          <li><Link to="/newbook/">newbook</Link></li>
          <h1>{text}</h1>
          
        </ul>

        <Link to="/"><h1 className="top-title">蔵書検索アプリ LIB</h1></Link>

        

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/" element={
            //ここでデータの受け渡し！
            <Search exText="aaaaa404" />
          } />
          <Route path="/contact/" element={<Contact message="Hello Contact" />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/setting/" element={<Setting />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/mypage/`} element={<Mypage />} />
          <Route path={`/newbook/`} element={<Newbook />} />
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
   </div>
 )
}

export default App;