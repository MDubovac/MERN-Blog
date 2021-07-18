import React from 'react'
import "./top.css";

function Top() {
    return (
        <div className="top">
            <div className="demo">
                <p>This is a demo site</p>
            </div>
            <div className="smedia">
                <a href="#">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i class="fab fa-pinterest-square"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Top
 