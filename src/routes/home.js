import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './home.css';
import Newbook from "./newbook";
import React, { useState, useEffect } from "react";
import { BookList } from './BookList';

function Home(props) {

  //現在時刻表示機能
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  //現在時刻表示機能
  return (
    <div>
      
      <Link to="/newbook/">
          <form className="d-flex form2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </Link>
      <div>
        今日は  {year}年 {month}月{date}日 {hour}:{minute}:{second}  です。
      </div>
      <h2>This is the Home</h2>
      <div className="topSpace">
        <div className="container-fluid">
          <div className="row">
            <div className='col-md'></div>
            <div className="col-md-6">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img1.png" alt="第1スライド" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="img2.png" alt="第2スライド" className="d-block w-100" />
                  </div>
                  <div className="carousel-item">
                    <img src="img3.png" alt="第3スライド" className="d-block w-100" />
                  </div>
                </div>
                <button type="button" className="carousel-control-prev" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">前へ</span>
                </button>
                <button type="button" className="carousel-control-next" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">次へ</span>
                </button>
              </div>
            </div>
            <div className='col-md'></div>
          </div>
        </div>
      </div>

      <BookList />
      
    </div>
  );
}

export default Home;