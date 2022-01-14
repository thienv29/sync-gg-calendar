const fs = require("fs");
const getDataFromFile  = () => {
    let listEventCalendar = []
    fs.readFile("./db.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:");
        listEventCalendar = JSON.parse(jsonString)
      });
    return listEventCalendar
}
const saveDataToFile = (listEventCalendar) => {
    fs.writeFile("./db.json",JSON.stringify(),(err) => {
        if (err) {
         console.log(err);
        }
      })
}
module.exports={
    getDataFromFile
}