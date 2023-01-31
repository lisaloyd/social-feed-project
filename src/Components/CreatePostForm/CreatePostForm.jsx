import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor=''>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <label htmlFor=''>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
                <button type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatePostForm;