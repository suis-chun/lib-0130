import App from '../App';
import React, { useState } from "react";



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

export default Search;

