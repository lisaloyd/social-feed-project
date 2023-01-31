import React, { useState } from "react";
import PostList from "./Components/PostList/PostList";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";

function App() {
  const [entries, setEntries] = useState([
    { name: "Lisa Loyd", post: " I will be there!" },
  ]);
  
    function addNewEntry(entry) {
      let tempEntries = { entry, ...entries };
      setEntries(tempEntries);
    }

    return (
      <div>
        <CreatePostForm AddNewEntryProperty={addNewEntry} />
        <PostList parentEntries={entries} />
      </div>
    );
  
}

export default App;
