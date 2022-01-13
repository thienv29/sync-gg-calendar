const express = require("express");
const {getEvents, dateTimeForCalander} = require("./google/google_calendar");
const app = express()
let listEventCalendar=[];
app.get("/", (req, res) => {
    
    res.send("hello")
    setInterval(() => {
        let obj =dateTimeForCalander()
        getEvents(obj.startDate,obj.endDate).then(
            (response) => {
              console.log(response);
              response.forEach((eventRes) => {
                test = listEventCalendar.find(eventCal  => eventCal.id === eventRes.id)
                if (!test) {
                    listEventCalendar.push(eventRes)
                }
              })
            }
        )
        .catch((e) => {
          console.log(e);
        })
    }, 3000);
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})