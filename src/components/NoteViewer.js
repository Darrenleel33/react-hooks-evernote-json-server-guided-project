import React from "react";




function NoteViewer(props) {




  return (
    <>
    <form >
      <h2>{props.displayNote.title}</h2>
      <p>{props.displayNote.body}</p>
      <button onClick={props.handleEditButton}>Edit</button>
      </form>
    </>
  );
}

export default NoteViewer;
