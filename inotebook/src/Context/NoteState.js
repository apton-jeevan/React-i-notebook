import NoteContext from "./notes/NoteContext";
import { useState } from "react";
import React from 'react'

export default function NoteState(props) {

    const notesInitial = [

        {
            "_id": "63f10c3c5e0393b145e574a1",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Bollywood Songs",
            "description": "Samjhawaan",
            "tag": "Personal",
            "date": "2023-02-18T17:34:52.044Z",
            "__v": 0
        },
        {
            "_id": "63f1b5502f8f86a63ee6d5ec",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Animal Kingdom",
            "description": "All about Animal Kingdom",
            "tag": "personal",
            "date": "2023-02-19T05:36:16.573Z",
            "__v": 0
        },
        {
            "_id": "63f1c152c328a082c5796c64",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Plants Kingdom",
            "description": "All about Plants Kingdom",
            "tag": "personal",
            "date": "2023-02-19T06:27:30.357Z",
            "__v": 0
        },
        {
            "_id": "63f1c178c328a082c5796c66",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Hollywood Songs",
            "description": "We Dont talk Anymore",
            "tag": "personal",
            "date": "2023-02-19T06:28:08.489Z",
            "__v": 0
        },
        {
            "_id": "63f1c2cf6fec5f3d60562cae",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Movies",
            "description": "Kilikkam",
            "tag": "personal",
            "date": "2023-02-19T06:33:51.706Z",
            "__v": 0
        },
        {
            "_id": "63f3416cc74e27c343d6588a",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Malayalam Songs",
            "description": "Pardheesa",
            "tag": "personal",
            "date": "2023-02-20T09:46:20.017Z",
            "__v": 0
        },
        {
            "_id": "63f3417dc74e27c343d6588c",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Cartoon",
            "description": "Shinchan",
            "tag": "personal",
            "date": "2023-02-20T09:46:37.338Z",
            "__v": 0
        },
        {
            "_id": "63f34184c74e27c343d6588e",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Cartoon",
            "description": "Power Rangers",
            "tag": "personal",
            "date": "2023-02-20T09:46:44.537Z",
            "__v": 0
        },
        {
            "_id": "63f341b9c74e27c343d65890",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "DSA",
            "description": "Trees and Graphs",
            "tag": "personal",
            "date": "2023-02-20T09:47:37.292Z",
            "__v": 0
        },
        {
            "_id": "63f341d7c74e27c343d65892",
            "user": "63f06a2ff8a5e9dbc6d26209",
            "title": "Dbms",
            "description": "Normalization",
            "tag": "personal",
            "date": "2023-02-20T09:48:07.494Z",
            "__v": 0
        }

    ]
    const [notes, setNotes] = useState(notesInitial)

    const AddNote=(title,description,tag)=>{
       const note= {
            "_id": "63f341d7c74e27c343d65892",
            "user": "63f06a2ff8a5e9dbc6d26209", 
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-02-20T09:48:07.494Z",

            "__v": 0
        }
        setNotes(notes.concat(note))
    }    
    return (
        <div>
            <NoteContext.Provider value={{ notes, AddNote }}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}
