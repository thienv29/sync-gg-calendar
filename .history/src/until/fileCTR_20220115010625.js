const fs = require("fs");
const getDataFromFile  = () => {
    
    fs.readFile("./db.json", "utf8", (err, jsonString) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:");
        listEventCalendar = JSON.parse(jsonString)
      });
}