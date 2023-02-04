import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import './App.css';



function App() {
  const [entries, setEntries] = useState([
    { name: "Lisa Loyd", post: " I will be there!" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div>
      <div className='border-box'>
        <CreatePostForm addNewEntryProperty={addNewEntry} />
      </div>
      <div className='border-box'>  
        <PostList parentEntries={entries} />
      </div>
    </div>
  );
}

export default App;
