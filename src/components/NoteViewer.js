import React from "react";




function NoteViewer(props) {



  return (
    <>
      <h2>{props.displayNote.title}</h2>
      <p>{props.displayNote.body}</p>
      <button onClick={props.showEditor}>Edit</button>
    </>
  );
}

export default NoteViewer;
