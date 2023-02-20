import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './InsertNote'
export default function Notes() {
 
    const context = useContext(NoteContext)
    const {notes} = context
    return (
        <> 
        <AddNote/>
            <h2>You Notes</h2>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
