const express = require("express");
const { getEvents, dateTimeForCalander, watchEvent } = require("./google/google_calendar");
const { getDataFromFile, saveDataToFile } = require("./until/fileCTR");
const { checkEventsChange, checkSizeData } = require("./until/handleData");
const app = express()

let Date = dateTimeForCalander()
let listEventLocal = []
getEvents(Date.startDate, Date.endDate).then(
  (listEvent) => {
    listEventLocal = checkEventsChange(listEvent, listEventLocal)
  }
).catch((e) => {
  console.log(e);
})

//2adc9bc0-757f-11ec-bb6f-21a7ff7ef5d0
app.get("/",(req,res) => {
  res.send("hello")
})
app.post("/calendar-notify", (req, res) => {
  listEventLocal = checkSizeData(listEventLocal)
  let Date = dateTimeForCalander()

  getEvents(Date.startDate, Date.endDate).then(
    (listEvent) => {
      listEventLocal = checkEventsChange(listEvent, listEventLocal)
    }
  ).catch((e) => {
    console.log(e);
  })
})


let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server is running 3000');
})