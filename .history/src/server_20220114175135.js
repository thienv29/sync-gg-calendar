const express = require("express");
const { getEvents, dateTimeForCalander, watchEvent, stopChannel, getListChannels } = require("./google/google_calendar");
const fs = require("fs");
const { json } = require("express/lib/response");
const app = express()



let listEventCalendar=[];
fs.readFile("./db.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:");
  listEventCalendar = JSON.parse(jsonString)
});
    



// watchEvent()
app.get("/", (req, res) => {
  res.send("hello")
})
app.post("/web_hook", (req, res) => {
  console.log(req);
})
app.post("/", (req, res) => {
  console.log(req);
  
})
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server is running');
})