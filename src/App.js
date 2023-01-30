import React, { useState } from 'react';



function App() {

const [entries, setEntries] = useState([{Name: 'Kevin Williams', Post: 'I am planning my vacation!'}])

  return (
    <div>
      <tables>
        <tr>Name</tr>
        <tr>Post</tr>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr>
                <td>{entry.Name}</td>
                <td>{entry.Post}</td>
              </tr>
            );
          })}
        </tbody>
      </tables>
    </div>
  );
}

export default App;
