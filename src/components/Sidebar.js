import React from "react";

import NoteList from "./NoteList";

function Sidebar(props) {
 

 
 function makeNewPost(){
  
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 1,
      title: "Default Title",
      body:"Test Body"
    })
  })
  .then(res=>res.json())
  .then(newPost=>props.newPostArray(newPost))


 }
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={props.notes} handleDisplay={props.handleDisplay}/>
      <button onClick={makeNewPost} >New</button>
    </div>
  );
}

export default Sidebar;
