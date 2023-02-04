import React, { useState } from "react";

const CreatePostForm = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      name: name,
      post: post,
    };
    console.log(newEntry);
    props.addNewEntryProperty(newEntry);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" className='form-control' value={name} onChange={(event) => setName(event.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Post</label>
        <input type="text" className='form-control' value={post} onChange={(event) => setPost(event.target.value)}/>
      </div>
      <div>
        <button type="submit" style={{'margin-top': '1em'}}>Create</button>
      </div>
    </form>
  );
};

export default CreatePostForm;
