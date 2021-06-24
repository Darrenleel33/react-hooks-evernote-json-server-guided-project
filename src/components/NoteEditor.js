import React from "react";

function NoteEditor(props) {

  
  return (
    <form className="note-editor">
      <input type="text" name="title" value=""/>
      <textarea name="body" value="" />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
