const express = require("express");
const { getEvents, dateTimeForCalander, watchEvent } = require("./google/google_calendar");
const fs = require("fs");
const { json } = require("express/lib/response");
const app = express()



// let listEventCalendar=[];
// fs.readFile("./db.json", "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("File read failed:", err);
//     return;
//   }
//   console.log("File data:");
//   listEventCalendar = JSON.parse(jsonString)
// });
// setInterval(() => {
//     let obj =dateTimeForCalander()
//     getEvents(obj.startDate,obj.endDate).then(
//         (response) => {
//           response.forEach((eventRes,index) => {
//             test = listEventCalendar.find(eventCal  => eventCal.id === eventRes.id)
//             if (!test) {
//                 listEventCalendar.push(eventRes)
//                  fs.writeFile("./db.json",JSON.stringify(listEventCalendar),(err) => {
//                    if (err) {
//                     console.log(err);
//                    }
//                  })
//                 console.log("trigger", index);
//             }else{
//             }
//           })
//         }   
//     )
//     .catch((e) => {
//       console.log(e);
//     })
// }, 120000);



// watchEvent()

app.get("/", (req, res) => {
  res.send("hello")
})
app.post("/web_hook", (req, res) => {
  console.log(req);
})
app.post("/", (req, res) => {
  console.log(req.IncomingMessage);
  
})
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('server is running');
})