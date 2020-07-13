const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
    {
        title: String,
        content: { type: String, required: true},
        author: { type: String },
        date: {type: Date, default:Date}
    }, {
        timestamps: true
    });

module.exports = model('Note', noteSchema);