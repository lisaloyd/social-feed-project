import React, { useState } from 'react';


const Post = props => {
    console.log(props);
    return (
        <div>
            <h3>{props.entry.name}</h3>
            <p>{props.entry.post}</p>
            <button type='text'>Like</button>
            <button type='text'>Dislike</button>
        </div>
    );
}

export default Post;