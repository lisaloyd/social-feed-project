import React, { useState } from 'react';
import PostList from './Components/PostList/PostList';


function App() {

const [entries, setEntries] = useState([{Name: 'Kevin Williams', Post: 'I am planning my vacation!'}])

  return (
    <div>
      <PostList parententries={entries} />

    </div>
  );
}

export default App;
