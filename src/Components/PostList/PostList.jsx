
const PostList = (props) => {
    return (
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
      );
}
 
export default ;