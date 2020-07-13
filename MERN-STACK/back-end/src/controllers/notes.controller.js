const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        author,
        content,
        date
        
    });
    await newNote.save();
    res.json('New Note added');
};

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findOne({_id: req.params.id});
    res.json(note);
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({_id: req.params.id})
    res.json('Note Deleted');
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, duration, date, author } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        author,
        content
    });
    console.log(req.params.id);
    res.json('Note Updated');
}

module.exports = notesCtrl;