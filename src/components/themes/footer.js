import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top bg-success">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="assets/images/swift2.png" className="footer-logo" alt="" />
                            <h5 className="font-weight-normal mt-4 mb-5">
                                Newspaper is your news, entertainment, music fashion website. We
                                provide you with the latest breaking news and videos straight from
                                the entertainment industry.
                            </h5>
                            <ul className="social-media mb-3">
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
            </div>
            {/* <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="d-sm-flex justify-content-between align-items-center">
                                <div className="fs-14 font-weight-600">
                                    © 2020 @ <a href="https://www.bootstrapdash.com/" target="_blank" className="text-white"> BootstrapDash</a>. All rights reserved.
                                </div>
                                <div className="fs-14 font-weight-600">
                                    Handcrafted by <a href="https://www.bootstrapdash.com/" target="_blank" className="text-white">BootstrapDash</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;