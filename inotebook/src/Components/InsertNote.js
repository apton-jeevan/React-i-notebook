import React, { useState } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import { useContext } from 'react'

export default function InsertNote() {
    const{AddNote}=useContext(NoteContext)
    const [note,setNote]=useState({"title":"","description":"","tag":"default"})
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value}) 
    }
    const AddNotesHandler=(e)=>{
        e.preventDefault(); // to avoid refreshing page in this case
        console.log(note.description)
        AddNote(note.title, note.description, note.tag);
    }
    return (
        <div>
            <h1>Add Notes</h1>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" id="title" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={AddNotesHandler}>Add Note</button>
            </form>
        </div>
    )
}
