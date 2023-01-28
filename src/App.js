import React, { useState } from 'react';



function App() {

const [entries, setEntries] = useState([{Name: 'Kevin Williams', Post: 'I am planning my vacation!', Status: 'Thumbs Up' }])

  return (
    <div>
      <tables>
        <tr>Name</tr>
        <tr>Post</tr>
        <tr>Status</tr>
      </tables>
    </div>
  );
}

export default App;
