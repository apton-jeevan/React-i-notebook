const express = require("express");
router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator');
const Note = require('../models/Note');

//ROUTER 1 Creating route api/note/fetchallnote  so that all note of a particular user is fetched // Login Required
router.get("/fetchallnote", fetchuser, async (req, res) => {
    try {
        const note = await Note.find({ user: req.user.id });
        res.json(note)
    }
    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");

    }
})

//ROUTER 2 Creating route api/note/addnote  note of a particular authorised user is added // Login Required
router.post("/addnote", fetchuser, [
    body('title', "title should be atleast 3 characters").isLength({ min: 3 }),
    body('description', "name should be atleast 5 characters").isLength({ min: 5 })]
    , async (req, res) => {


        try {
            const { title, description, tag } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            //No error so we add the note
            const note = new Note({
                title, description, tag, user: req.user.id // equivalent to title:title description:description
            })
            //We have to save user id with notes so that in database it can be identified which note belongs to which user
            const savedNote = await note.save()
            res.json(savedNote)
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error");

        }
    })


//ROUTER 3 Creating route api/note/updatenote/:id so that particular note of the respective authorised user  is updated // Login Required

//generally for updation we use put.(can also use post and get..no problem)


//the colon (:) before id is used to define a URL parameter. URL parameters allow you to capture values from the URL and use them in your server-side logic.
// id is the note id of the note which we want to update
    router.put("/updatenote/:id", fetchuser,
    async (req, res) => {

        try {
            const { title, description, tag } = req.body;

            const newNote = {} // Created and object whose variable name is newNote

            // if title,description and tag are requested by the user to be updated then only update it.
            if (title) {
                newNote.title = title
            }
            if (description) {
                newNote.description = description
            }
            if (tag) {
                newNote.tag = tag
            }

            //No error so we update the note

            //We also need to check whether the Note id exists or not.

            let note = await Note.findById(req.params.id); //param.id is the id mentioned in url
            if (!note) { return res.status(404).send("Not Found") }

            //checking whether the user whose note is being updates is same as req.user.id which we will get from the middleware fetchuser
            console.log(note.user)
            console.log(req.user.id)
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }

            // if control reaches here that means user is updating it's own notes.
            note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true})
            res.json({ note });

            //{ new: true } is an option that specifies whether the updated document should be returned by the method. If new is set to true, the updated document will be returned. If new is set to false, the original document will be returned before the update was applied.

            //{ $set: newNote } is an update operation that sets the fields in the document to the values specified in the newNote object. 

        }

        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error");

        }
    })

    //ROUTE 4 Creating route api/note/deletenote/:id so that particular note of the respective authorised user  is deleted // Login Required

// Delete http method is used

//the colon (:) before id is used to define a URL parameter. URL parameters allow you to capture values from the URL and use them in your server-side logic.
router.delete("/deletenote/:id", fetchuser,
async (req, res) => {
    try {
        

        //checking whether the Note id exists or not.

        let note = await Note.findById(req.params.id); //param.id is the id mentioned in url
        if (!note) { return res.status(404).send("Not Found") }

        //checking whether the user whose note is being updates is same as req.user.id which we will get from the middleware fetchuser
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // if control reaches here that means auhtorised user is deleteing its own notes

        note = await Note.findByIdAndDelete(req.params.id)// this method returns the deleted document. So variable note contains the deleted document.
        res.json({ "Success": "Note has been deleted", note: note });

        //{ new: true } is an option that specifies whether the updated document should be returned by the method. If new is set to true, the updated document will be returned. If new is set to false, the original document will be returned before the update was applied. 

    }

    catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");

    }
})


module.exports = router   