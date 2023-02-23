import NoteContext from "./notes/NoteContext";
import { useState } from "react";
import React from 'react'

export default function NoteState(props) {
    const host = "http://localhost:5000" //where our backend is present
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    // getNotes is called once in Notes.js as it is used inside useEffect
    const getNotes = async () => {
        // API Call 
    //    syntax await fetch(route,methods,headers reqbody)
        const response = await fetch(`${host}/api/note/fetchallnote`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json) // with this all notes of a particular user will be fetched
    }

    // Add a Note
    const AddNoteApi = async (title, description, tag) => {

        // API Call
        const response = await fetch(`${host}/api/note/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            },
            body: JSON.stringify({ title, description, tag })
        });


        console.log("Adding a new note")
        const note = {
            // "_id": "61322f119553781a8ca8d0e08",
            // "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            // "date": "2021-09-03T14:20:09.668Z",
            // "__v": 0
        };
        setNotes(notes.concat(note))
    }


    //Edit Note
    const EditNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // To edit in client side
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }

    }
    const DeleteNote = (id) => {
        console.log("delete")
        const NewNotes = notes.filter((note) => { return note._id !== id })
        setNotes(NewNotes)
    }
    return (
        <div>
            <NoteContext.Provider value={{ notes, AddNoteApi, DeleteNote,getNotes}}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}



