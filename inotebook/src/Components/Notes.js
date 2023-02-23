import React from 'react'
import { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useEffect } from 'react'
export default function Notes() {
 
    const context = useContext(NoteContext)
    const {notes,getNotes} = context
    useEffect(() => {
        getNotes()
    }, []) // If  i  put notes in dependency array then as soon as we add the new note,notes will be updated by setNotes(code mentiond in Notestate.js) therefore useEffect called getNotes called and mind it , it is used for fetching and inside getNotes route setNotes is there so react think note might be updated so again calls getNotes , in getnotes we again have setNotes so this goes on loop and we get infinte loop.
    return (
        <> 
        <AddNote/>
            <h2>Your Notes</h2>
            <div className="row my-3">
                {/* for displaying the notes */}
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </>
    )
}
