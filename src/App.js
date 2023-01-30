import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {

const [entries, setEntries] = useState([{Name: 'Kevin Williams', Post: 'I am planning my vacation!'}])

  return (
    <div>
      <PostList parententries={entries} />
      <CreatePostForm />
    </div>
  );
}

export default App;
