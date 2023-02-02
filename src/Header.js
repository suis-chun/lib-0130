import "./Header.css";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#">Navbar</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-top-2">

                            <li class="nav-item">
                                <Link className="link-text" to="/">Home </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="link-text" to="/mypage/">My Page</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                            <ul>
                                <Link to="/">Home </Link>
                                <Link to="/contact">Contact </Link>
                                <Link to="/setting">Setting </Link>
                                <Link to="/register/">register </Link>
                                <Link to="/login/">login </Link>
                                <Link to="/mypage/">mypage </Link>
                                <Link to="/newbook/">newbook </Link>
                                <Link to="/header/">header </Link>
                                <Link to="/search">Search </Link>
                            </ul>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
}



export default Header;