import React from 'react'

export default function NoteItem(props) {
    const { title, description } = props.note
    return (
        <div className="col-4 my-2">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>

                </div>
            </div>
        </div>
    )
}
