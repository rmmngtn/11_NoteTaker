const path = require("path");
const fs = require("fs");

var notes = []

module.exports = function(app) {
    fs.readFile("./db/db.json", function(err, data) { 
        if (err) throw err; 
        notes = JSON.parse(data); 
    }); 

    app.get("/api/notes", function (req, res) {
        res.json(notes); 
        // console.log(notes);
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body; 
        notes.push(newNote); 
        
        updateDB(); 
        console.log("New note: " + JSON.stringify(newNote)); 

       
    }); 

    app.get("/api/notes/:id", function(res, req){ 
        return res.json(notes[req.params.id]); 
        // console.log([req.params.id]); 
    }); 

    app.delete("/api/notes/:id", function(res, req) { 
        notes.splice(req.params.id, 1); 
        updateDB(); 
        console.log("Deleted note " + notes.id.title); 

    })


    function updateDB() { 
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) throw err }); 

        return true; 
        
        
    }; 


}
