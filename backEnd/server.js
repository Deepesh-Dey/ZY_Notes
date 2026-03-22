import express from "express"; 
//"type": "commonjs",(in package.json) // const express = require("express") (in server.js)  // for commonjs;

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("You got 5 Notes");
});

app.listen(5001, () => {
    console.log("Server started on port: 5001");
})
