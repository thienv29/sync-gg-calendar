const express = require("express");
const {getEvents, dateTimeForCalander} = require("./google/google_calendar");
const db = require("../db.json");
// const fs = require("fs")
const app = express()
let listEventCalendar=;
setInterval(() => {
    let obj =dateTimeForCalander()
    getEvents(obj.startDate,obj.endDate).then(
        (response) => {
          response.forEach((eventRes,index) => {
            test = listEventCalendar.find(eventCal  => eventCal.id === eventRes.id)
            if (!test) {
                listEventCalendar.push(eventRes)
                // fs.write("../db.json",JSON.stringify(listEventCalendar))
                console.log("trigger", index);
            }else{
            }
          })
        }   
    )
    .catch((e) => {
      console.log(e);
    })
}, 10000);
app.get("/", (req, res) => {
    res.send("hello")
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})