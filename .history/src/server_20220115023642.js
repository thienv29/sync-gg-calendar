const express = require("express");
const { getEvents, dateTimeForCalander, watchEvent } = require("./google/google_calendar");
const { getDataFromFile, saveDataToFile } = require("./until/fileCTR");
const { checkEventsChange, checkSizeData } = require("./until/handleData");
const app = express()

// watchEvent()
let listEventLocal =[]
getDataFromFile()
console.log(listEventLocal);
app.post("/", (req, res) => {
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
  console.log('server is running');
})