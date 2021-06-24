import React, {useState} from "react";





function NoteEditor(props) {
  
  const [title, setTitle]= useState("")
  const [body,setBody]=useState("")

  

  function handleSubmitButton(){


  fetch('http://localhost:3000/notes', {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userId: 1,
      title: {title},
      body:{body}
    })
  });
}


  
  return (
    <form className="note-editor" onSubmit={handleSubmitButton}>
      <input type="text" name="title" value={props.displayNote.title} onChange={e=>setTitle(e.target.value)}/>

      
      <textarea name="body" value={props.displayNote.body} onChange={e=>setBody(e.target.value)}>{props.displayNote.body} </textarea>
      
      
       <textarea>{props.displayNote.body}</textarea>

      <div className="button-row">
        <input className="button" type="submit" value="Save"/>
        <button type="button" onClick="">Cancel</button> 
      </div>
    </form>
  );
}

export default NoteEditor;
