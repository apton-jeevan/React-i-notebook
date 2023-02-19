import NoteContext from "./notes/NoteContext";
import { useState } from "react";
import React from 'react'

export default function NoteState(props) {


    const s1={
        name:"Jeevan",
        class:"12-A"
    }
    const [state,setstate]=useState(s1)

const update=()=>{
    setTimeout(() => {
        setstate({
            "name": "Agnel",
            "class": "12-B"
        })
    }, 2000);
}
  return (
    <div>
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
    </div>
  )
}
