import React from "react";
import ss from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: "What “old person” things do you do?", likesCount: 17},
        {id: 2, message: 'What’s wrong but sounds right?', likesCount: 25},
    ];
    let postsElement = posts.map(item => <Post message={item.message} likesCount={item.likesCount}/>);

    return (
        <div className={ss.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={ss.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts