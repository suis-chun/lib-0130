
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import '../App.css';

function Home(props) {

  

  return (

    
    
    <div>
      <p>{props.count}</p>
      <h2>Home</h2>

      

      <div className="topSpace">


        <div class="container-fluid">

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




          <div className="row">
            <div className='col-md-6'>1-1</div>
            <div className='col-3'>1-2</div>
            <div className='col-3'>1-3</div>

          </div>
          <div class="row">
            <div className='col'>2行目 １列目</div>
          </div>
          <div class="row">
            <div className='col'>3行目 １列目</div>
          </div>
        </div>

      </div>
    </div>
    
    );
}

export default Home;