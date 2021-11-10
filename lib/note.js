const fs = require("fs");
const { type } = require("os");
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
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            notes.splice(i,1);
            break;
        }
    }
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