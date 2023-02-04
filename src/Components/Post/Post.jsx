import React, { useState } from 'react';
import './PostButton.css'

const Post = props => {
    const [likeButtonClass, setLikeButtonClass] = useState("inactive")
    const [dislikeButtonClass, setDislikeButtonClass] = useState("inactive")

    function toggleLikeDislike(buttonType) {
        if (buttonType === 'like'){
           setLikeButtonClass('activelike') 
           setDislikeButtonClass('inactive')
        }
        else if (buttonType === 'dislike') {
            setDislikeButtonClass('activedislike')
            setLikeButtonClass('inactive')
        }
    }
    console.log(props);
    return (
        <div>
            <h3>{props.entry.name}</h3>
            <p>{props.entry.post}</p>
            <button type='text' className={likeButtonClass} onClick={() => toggleLikeDislike('like')}>Like</button>
            <button type='text' className= {dislikeButtonClass} onClick={() => toggleLikeDislike('dislike')}>Dislike</button>
        </div>
    );
}


export default Post;