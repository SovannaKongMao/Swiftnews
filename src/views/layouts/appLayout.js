import React from "react";

import Footer from "./../../components/themes/footer"
import Header from "./../../components/themes/header"
import Nav from "./../../components/themes/nav"

const AppLayout = ({ children }) => {
    return (
        <>
            <Nav />
            <Header />
            <div class="content-wrapper">
                <div class="container">
                    <div class="row" data-aos="fade-up">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AppLayout;