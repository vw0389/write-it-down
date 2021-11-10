const {notes} = require('../../data/db.json');
const router = require('express').Router();
const {validateNote,createNote,deleteById,generateId} = require('../../lib/note');
router.get('/notes', (req,res) =>  {
    res.json(notes)
});
router.post('/notes', (req,res) =>  { 
    // add id to body
    req.body.id = generateId();

    // Validate note
    if (!validateNote(req.body)) {
        res.status(400).send("note is not properly formatted");
    } else {
        // Creation of new note
        const note = createNote(req.body,notes);
        res.json(note);
    }
});
router.delete('/notes/:id', (req,res) => {

    let id = req.params.id;
    
    if (id < 0 || typeof id !== 'number') {
        res.status(400).send("request not properly formatted");
    } else {
        deleteById(id,notes);
        res.status(200).send("ok");
    }
});
module.exports = router;