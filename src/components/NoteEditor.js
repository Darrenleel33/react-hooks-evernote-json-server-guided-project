import React, {useState} from "react";





function NoteEditor(props) {
  
  const [formTitle, setTitle]= useState(props.displayNote.title)
  const [formBody,setBody]=useState(props.displayNote.body)

  
  
  function handleSubmitButton(e){
    e.preventDefault()
    const id = props.displayNote.id
    
  fetch(`http://localhost:3000/notes/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: formTitle,
      body: formBody,
      userId: 1
    })
  })
  .then(res=>res.json())
  .then(newEdit=>props.newEditPost(newEdit))
}


  
  return (
    <form className="note-editor" onSubmit={handleSubmitButton}>

      <input type="text" name="title" value={formTitle} onChange={e=>setTitle(e.target.value)}/>


      <textarea name="body" value={formBody} onChange={e=>setBody(e.target.value)}> {props.displayNote.body}</textarea>
      
      
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={props.cancelButton}>Cancel</button>

      
      </div>
    </form>
  );
}

export default NoteEditor;
