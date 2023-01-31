import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import Post from './Components/Post/Post';

function App() {

const [entries, setEntries] = useState([{}])
  {  
function addNewEntry(entry){
  let tempEntries = {entry, ...entries};
  setEntries(tempEntries);
}

  return (
    <div>
      <PostList parentEntries={entries} />
      <CreatePostForm AddNewEntryProperty={addNewEntry} />
      <Post />
    </div>
  )};
}

export default App;
