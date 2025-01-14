import React, { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content(props) {

  const [toggle,setToggle]=useState(false)
  
  //triggers the toggle to true so then it can open editor
  function handleEditButton(e){
    e.preventDefault()
   setToggle((e.target.value)=!toggle)
  }
  
  function cancelButton(e){
    e.preventDefault()
    setToggle((e.target.value)=!toggle)
  }

  const getContent = () => {
    if (toggle) {
      return <NoteEditor displayNote={props.displayNote} cancelButton={cancelButton} newEditPost={props.newEditPost}/>;
    } else if (props.displayNote) {
      return <NoteViewer displayNote={props.displayNote} handleEditButton={handleEditButton}/>;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
