const express = require("express")
const getEvents = require("./google/google_calendar")
const app = express()
let CalendarFetch = []
app.get("/", (req, res) => {
    res.send('sync calendar')
})
app.listen(3000, () => {
    console.log('server is running');
})