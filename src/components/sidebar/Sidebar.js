import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="aboutMe">
                <h2>About me</h2>
                <img src="https://images.pexels.com/photos/4640886/pexels-photo-4640886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className="categories">
                <h2>Categories</h2>
                <ul>
                    <li>Meat</li>
                    <li>Fish</li>
                    <li>Pasta</li>
                    <li>Soup</li>
                    <li>Salads</li>
                    <li>Desserts</li>
                </ul>
            </div>

            <div className="followUs">
                <h2>Follow Us</h2>
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

        </div>
    )
}

export default Sidebar
