const path = require('path');
const fs = require('fs');
// const notes = require("../db/db.json"); 


module.exports = function(app) {
    app.get("/api/notes", function (req, res) {
        return res.sendFile(path.join(__dirname, "../db/db.json")); 

    });

//     app.post("/api/notes", function (req, res) {
//         res.send(__dirname + "/db/db.json", function(err, notes) { 
//             if (err){ 
//                 console.log(err); 
//             }
//         }); 

//         notes = JSON.parse(notes)
  
//         var id = notes[notes.length - 1].id + 1
//         var newNote = { title: req.body.title, text: req.body.text, id: id }
//         var activeNote = notes.concat(newNote)
    
//         fs.writeFile(__dirname + "/db/db.json", JSON.stringify(activeNote), function (error, data) {
//           if (error) {
//             return error
//           }
//           console.log(activeNote)
//           res.json(activeNote);
//         })
//       })
  }

        // let newNote = {title: req.body.title, text: req.body.text }
        

//     })
// }



    
//       notes = JSON.parse(notes)
  
//       var id = notes[notes.length - 1].id + 1
//       var newNote = { title: req.body.title, text: req.body.text, id: id }
//       var activeNote = notes.concat(newNote)
  
//       fs.writeFile(__dirname + "/db/db.json", JSON.stringify(activeNote), function (error, data) {
//         if (error) {
//           return error
//         }
//         console.log(activeNote)
//         res.json(activeNote);
//       })
//     })
//   })

// // fs.writeFile('./output/team.html', html, (err) => {
// //     if (err) throw err;
// //     console.log('The file has been saved!');
// // });