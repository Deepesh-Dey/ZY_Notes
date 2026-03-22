import express from "express"; 
//"type": "commonjs",(in package.json) // const express = require("express") (in server.js)  // for commonjs;
import notesRoutes from "./routes/notesRoutes.js";


const app = express();
app.use("/api/notes", notesRoutes);

// app.get("/api/notes", (req, res) => {
//     res.status(200).send("You got 10 Notes");
// });
// app.post("/api/notes", (req, res) => {
//     res.status(201).json({ message: "Note is created successfully" });
// });
// app.put("/api/notes/:ID", (req, res) => { 
//     res.status(201).json({ message: "Note is updated successfully" });
// });
// app.delete("/api/notes/:ID", (req, res) => {
//     res.status(200).json({ message: "Note is deleted successfully" });
// });
app.listen(5001, () => {
    console.log("Server started on port: 5001");
})
