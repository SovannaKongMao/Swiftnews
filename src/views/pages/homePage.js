import React from "react";

import AppLayout from "../layouts/appLayout";
import LatestPost from "./../../components/posts/latestPost"
import TopHead from "../layouts/TopHead";


const HomePage = () => {
    return (
        <AppLayout>
            <TopHead></TopHead>
            <LatestPost />
        </AppLayout>
    )
}

export default HomePage;