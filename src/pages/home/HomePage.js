import React from 'react'
import "./home.css"
import Banner from "../../components/banner/Banner"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"

function HomePage() {
    return (
        <>
        <Banner />
        <div className="homePage">
            <Posts />
            <Sidebar />
        </div>
        </>
    )
}

export default HomePage
