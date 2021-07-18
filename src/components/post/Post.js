import React from 'react'
import './post.css'

function Post() {
    return (
        <div className="post">
            <img src="https://images.pexels.com/photos/5865282/pexels-photo-5865282.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
            <div className="postCat">
                <p>Meat</p>
                <p>Soup</p>
            </div>
            <div className="postTitle">
                <h2>Post #1</h2>
            </div>
            <div className="postTime">
                <p>1 hour ago</p>
            </div>
            <div className="postExcrept">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default Post
