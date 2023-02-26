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
        // API Call(fetching notes from database)
        //syntax await fetch(route,methods,headers reqbody)
        const response = await fetch(`${host}/api/note/fetchallnote`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            }
        });
        const json = await response.json() // await used as response.json is a promise.
        setNotes(json) // with this all notes of a particular user will be fetched
    }

    // Add a Note
    const AddNoteApi = async (title, description, tag) => {

        // API Call(adding notes in database)
        await fetch(`${host}/api/note/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            },
            body: JSON.stringify({ title, description, tag })

        });
           getNotes(); // to fetch the newly added note 
    }

        
  // DO NOT USE THE BELOW METHOD FOR ADDING NOTES IN CLIENT AS THE NEWLY ADDED NOTE HERE IS NOT FETCHED FROM DATABASE. 
  //SO THE ADDED NOTE WHICH WE ARE SEEING HAS ONLY TITLE ,DESCRIPTION AND TAG WHICH WE HAVE GIVEN AND THE REMAINGING DATE,ID ETC. ARE NOT SET IN CLIENT SIDE. 
  //THAT IS WHY WHEN WE TRY TO DELETE THE NOTE AS SOON AS WE ADD IT WE GET THE ERROR 'Cast to ObjectId failed for value "undefined" (type string) at path "_id" for model "Note" . IT IS ONLY AFTER REFRESHING WE CAN DELETE THE NEWLY ADDED NOTE AS NOW THE NEWLY ADDED NOTE IS FETECHED FROM DATABASE DUE TO REFRESHING BCZ WITH REFRESH AGAIN UseEffect() is called WHERE GETNOTES IS DEFINED

        // to add notes in the client side

        // const note = {
        //     "title": title,
        //     "description": description,
        //     "tag": tag,                    
        // };
        // setNotes(notes.concat(note))


    //Edit Note

    const EditNote = async (id, title, description, tag) => {
        // API Call 
    await fetch(`${host}/api/note/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            },
            body: JSON.stringify({ title, description, tag })
        });
        getNotes()


        // To edit in client side
        // for (let i = 0; i < notes.length; i++) {
        //     const element = notes[i];
        //     if (element._id === id) {
        //         element.title = title;
        //         element.description = description;
        //         element.tag = tag;
        //     }
        // }

    }
    const DeleteNote = async (id) => {
        await fetch(`${host}/api/note/deletenote/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMDZhMmZmOGE1ZTlkYmM2ZDI2MjA5In0sImlhdCI6MTY3Njc4NDg1M30.6mz3VoiyAdw91NNiXlp4mhVL0UX3trD7Ptpvxej4bxo"
            }

        })  

        getNotes();   // to fetch the notes after we have deleted the note from database
       
    }

    return (
        <div>
            <NoteContext.Provider value={{ notes, AddNoteApi, DeleteNote, getNotes,EditNote }}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}



