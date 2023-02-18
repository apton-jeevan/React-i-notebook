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

//ROUTER 2 Creating route api/note/addnote  so that all note of a particular user is added // Login Required
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
            const savedNote = await note.save()
            res.json(savedNote)
        }
        catch (error) {
            console.error(error.message)
            res.status(500).send("Internal Server Error");

        }
    })

module.exports = router   