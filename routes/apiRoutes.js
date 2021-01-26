const path = require('path');
const fs = require('fs');
// const notes = require("../db/db.json"); 


module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));

    })



    app.post("/api/notes", function (req, res) {
        res.sendFile(__dirname + "/db/db.json", function (err, notes) {
            if (err) {
                console.log(err);
            }
        });

        notes = JSON.parse(notes)

        var newNote = { title: req.body.title, text: req.body.text}
        var activeNote = notes.concat(newNote)

        fs.writeFile(__dirname + "/db/db.json", JSON.stringify(activeNote), function (error, data) {
            if (error) {
                return error
            }
            console.log(activeNote)
            res.json(activeNote);
        });
    })


}
