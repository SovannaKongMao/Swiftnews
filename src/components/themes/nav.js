import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="container-scroller">
            <div className="main-panel">

                <header id="header" className="bg-success">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="navbar-top">
                                <div className="navbar-bottom bg-success">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>

                                            <Link to="/" className="nav-link " > <img src="assets/images/swift2.png" alt="" /> </Link>

                                        </div>
                                        <div>
                                            <button
                                                className="navbar-toggler "
                                                type="button"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                <span className="navbar-toggler-icon "></span>
                                            </button>
                                            <div
                                                className="navbar-collapse justify-content-center collapse bg-success"
                                                id="navbarSupportedContent "
                                            >
                                                <ul
                                                    className="navbar-nav d-lg-flex justify-content-between align-items-center "
                                                >
                                                    <li>
                                                        <button className="navbar-close ">
                                                            <i className="mdi mdi-close"></i>
                                                        </button>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/business" className="nav-link" > Business </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/sport" className="nav-link" > Sport </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/tech" className="nav-link" > Technology </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/entertain" className="nav-link" > Entertainment </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/contact" className="nav-link" > Contacts </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/about" className="nav-link" > About </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul className="social-media">
                                            <li>
                                                <a href="https://www.facebook.com/freshnewsasia">
                                                    <i className="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/c/freshnewsvideo">
                                                    <i className="mdi mdi-youtube"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Nav;