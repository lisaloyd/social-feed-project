import React, { useState } from 'react';
import Post from '../Post/Post';


const PostList = (props) => {
  let entries = props.parentEntries.map(entry => {
    return <Post entry={entry} />;
  });

  return <div>{entries}</div>
};           
 
export default PostList;