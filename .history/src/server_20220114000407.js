const express = require("express");
const {getEvents, dateTimeForCalander} = require("./google/google_calendar");
const app = express()
app.get("/", (req, res) => {
    
    res.send("hello")
    setInterval(() => {
        let obj =dateTimeForCalander()
        getEvents(obj.startDate,obj.endDate).then(
            (response) => {
              console.log(response);
            }
        )
        .catch((e) => {
          console.log(e);
        })
    }, 6000);
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})