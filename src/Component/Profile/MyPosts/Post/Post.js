import React from "react";
import ss from './Post.module.css';

const Post = (props) => {

    return (
        <div className={ss.item}>
            <img
                src={'https://i.guim.co.uk/img/media/20b1ed84a85590f6ef2ef8ec4e083ededcbcb75a/445_367_3662_4578/master/3662.jpg?width=300&quality=85&auto=format&fit=max&s=1ebdf1c851afde1a82981753de6acc93'}/>
            <span> {props.message}</span>

            <div>like , {props.likesCount}</div>
        </div>
    )
};

export default Post