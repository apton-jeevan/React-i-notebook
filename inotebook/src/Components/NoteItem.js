import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

export default function NoteItem(props) {
    const context = useContext(NoteContext)
    const { DeleteNote }=context
    const { note } = props

    return (
        <div className="col-4 my-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash me-3" onClick={()=>{DeleteNote(note._id)}}></i>
                    <i className="fa-sharp fa-solid fa-file-pen"></i>
                </div>
            </div>
        </div>
    )
}
