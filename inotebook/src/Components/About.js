import React from 'react'
import NoteContext from '../Context/notes/NoteContext'
import { useContext } from 'react'
import { useEffect } from 'react'
export default function About() {

  const a = useContext(NoteContext)

  useEffect(() => {
      a.update()
  })

  return (
    <div>
      <h1>This is About Page</h1>
      This is About {a.state.name} and he is in class {a.state.class}

    </div>
  )
}
