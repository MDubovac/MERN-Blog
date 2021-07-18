import React from 'react'
import "./banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="bannerText">
                <p>This is demo blog site</p>
                <h2>MERN Stack FoodBlog</h2>
                <p>
                    This is a website that will contain posts about food and food critics.
                    All of the data is just dummy text and images.
                </p>
                <p>
                    Made with <i className="fas fa-heart"></i> by <a href="https://github.com/mdubovac">Mladen Dubovac</a>
                </p>
            </div>
        </div>
    )
}

export default Banner
