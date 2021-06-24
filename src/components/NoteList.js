import React from "react";
import NoteItem from "./NoteItem";


function NoteList(props) {

const tonsOfNote = props.notes.map(note => <NoteItem note={note} handleDisplay={props.handleDisplay}/>) 








  return (
      <div>
        <ul>
          {tonsOfNote}
        </ul>
      </div>
  );
}

export default NoteList;
