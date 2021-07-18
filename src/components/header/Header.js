import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="left">
                <a href="#">
                    <b>FoodBlog</b>
                </a>
            </div>
            <div className="mid">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Write</li>
                    <li>Log Out</li>
                </ul>
            </div>
            <div className="right">
                <img src="https://images.pexels.com/photos/6895756/pexels-photo-6895756.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                <i className="fas fa-search"></i>
            </div>
            
        </div>
    )
}

export default Header