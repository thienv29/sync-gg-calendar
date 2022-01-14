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