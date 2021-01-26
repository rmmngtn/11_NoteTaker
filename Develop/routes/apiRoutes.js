const { fstat } = require('fs');
const path = require('path');
// const waitlist = require('../data/waitinglistData');
// const tables = require("../data/tableData");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.sendFile(path.join(__dirname, "..db/db.json")); 

    });

    app.post("/api/notes", function (req, res) {
        fs.readFile(__dirname + "/db/db.json", (err) => { 
            if (err) throw err; 
        })

    })
}



fs.writeFile('./output/team.html', html, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});