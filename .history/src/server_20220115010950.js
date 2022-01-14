const express = require("express");
const { getEvents, dateTimeForCalander, watchEvent} = require("./google/google_calendar");
const fs = require("fs");
const { getDataFromFile } = require("./until/fileCTR");
const app = express()

let listEventCalendar=getDataFromFile();


// watchEvent()
app.post("/", (req, res) => {
  let Date =dateTimeForCalander()
    getEvents(Date.startDate,Date.endDate).then(
        (listEvent) => {
          listEvent.forEach((eventRes,index) => {
            let Check = listEventCalendar.find(eventCal  => eventCal.id === eventRes.id)
            if (!Check) {
                listEventCalendar.push(eventRes)
                 fs.writeFile("./db.json",JSON.stringify(listEventCalendar),(err) => {
                   if (err) {
                    console.log(err);
                   }
                 })
                console.log("trigger", index);
            }else{
            }
          })
        }   
    )
    .catch((e) => {
      console.log(e);
    })
})
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server is running');
})