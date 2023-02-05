import "./Header.css";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link className="link" to="/">蔵書検索アプリ</Link>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-top-2">

                            {/*
                            <li class="nav-item">
                                <Link className="link-text" to="/">Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-text" to="/mypage/">My Page</Link>
                            </li>
                            */}
                            <div class="button">
                                <Link className="link" to="/"><button className="btn btn-outline-light" >Home </button></Link>
                                <Link className="link" to="/mypage/"><button className="btn btn-outline-light" >My Card </button></Link>
                                <Link className="link" to="/contact/"><button className="btn btn-outline-light" >Contact</button></Link>


                            </div>
                            <ul>
                                <div>
                                    <Link className="link" to="/">Home </Link>
                                    <Link className="link" to="/contact">Contact </Link>
                                    <Link className="link" to="/setting">Setting </Link>
                                    <Link className="link" to="/register/">register </Link>
                                    <Link className="link" to="/login/">login </Link>
                                    <Link className="link" to="/mypage/">mypage </Link>
                                    <Link className="link" to="/newbook/">newbook </Link>
                                    <Link className="link" to="/header/">header </Link>
                                    <Link className="link" to="/search">Search </Link>
                                </div>
                            </ul>
                        </ul>

                    </div>
                </div >
            </nav >
        </div >
    );
}



export default Header;