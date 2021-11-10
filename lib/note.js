const fs = require("fs");
const path = require("path");

function validateNote(note) {
    if (!note.title || typeof note.title !== "string" || note.title === '') {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    return true;
}
function generateId() {
    // should be hash function instead of random integer
    return Math.floor(Math.random() * 10000000001);
}
function createNote(body,notes) {
    const newNote = body;
    notes.push(newNote);
    // Save notes
    save(notes);
    return newNote;
}
function deleteById(id,notes) {
    

    save(notes);
}

function save(notes) {
    fs.writeFileSync(path.join(__dirname,"../data/db.json"),JSON.stringify({notes},null,2));
}

module.exports = {
    validateNote,
    generateId,
    createNote,
    deleteById
};