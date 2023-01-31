import React, { useState } from 'react';
import Post from '../Post/Post';


const PostList = (props) => {
    return (
        <div>
        <tbody>
            {props.parentEntries.map((entry) => {
              return (
                <tr>
                  <td>{entry.Name}</td>
                  <p>{entry.Post}</p>
                </tr>
            );
          })}
      </tbody>
      </div>
      );
}
 
export default PostList;