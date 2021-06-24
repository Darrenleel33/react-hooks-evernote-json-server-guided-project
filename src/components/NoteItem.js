import React from "react";

function NoteItem(props) {

 function handleClick(){
  props.handleDisplay(props.note.id)
 }

  return (
    <li onClick={handleClick}>
      <h2>{props.note.title}</h2>
      <p className="noteitemBody" >{props.note.body}</p>
    </li>
  );
}

export default NoteItem;
