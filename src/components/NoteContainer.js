import React, { useEffect, useState } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";


// [ ] Displayed sidebar notes should show the title and a truncated body.
// [ ] When a note from the sidebar is clicked, display its contents in the right panel.



function NoteContainer() {
  
  const [notes, setNotes]= useState([])
  const [searchTerm, setSearch]=useState("")
  const [displayNote, setDisplay]=useState(null)
  
  useEffect(()=>{
   fetch("http://localhost:3000/notes")
   .then (res=>res.json())
   .then(data=>setNotes(data))}
   ,[]
   )

  function handleSearchChange(e){
    e.preventDefault();
    setSearch(e.target.value)
    //console.log(e.target.value)
  }
 function filteredNotes() {
  if(searchTerm===true){
  return notes.filter(note=> note.title.toLowerCase().includes(searchTerm))
 } else{
   //created this else statement to also search for "body"
   return notes.filter(note=> note.body.toLowerCase().includes(searchTerm))
 }
}

function handleDisplay(id){
 const findNote = notes.find(note => note.id === id)
 setDisplay(findNote)
 console.log(findNote)
}
 
function newPostArray(newPost){
 let newArray=[newPost, ...notes]
 setNotes(newArray)
}

function newEditPost(newEdit){
  let editArray= notes.map(note=>{
    if (note.id === newEdit.id){
      return newEdit
    }else{
      return note
    }
  })
  setNotes(editArray)
}

    
  
  return (
    <>
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <div className="container">
        <Sidebar notes={filteredNotes()} newPostArray={newPostArray} handleDisplay={handleDisplay}/>
        {/* pass something in content */}
        <Content displayNote={displayNote} newEditPost={newEditPost}/> 
      </div>
    </>
  );
}

export default NoteContainer;
