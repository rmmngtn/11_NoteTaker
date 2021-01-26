const path = require('path');
// const waitlist = require('../data/waitinglistData');
// const tables = require("../data/tableData");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.sendFile(path.join(__dirname, "..db/db.json")); 

    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        console.log(newNote); 

        notes.push(newNote); 
        // res.send
        notes.writeNote(); 

 
    })
}