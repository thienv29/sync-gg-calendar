const express = require("express");
const {getEvents, dateTimeForCalander} = require("./google/google_calendar");
const app = express()
let listEventCalendar=[];
app.get("/", (req, res) => {
    
    res.send("hello")
    
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})