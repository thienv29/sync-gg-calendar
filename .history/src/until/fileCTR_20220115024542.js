const fs = require("fs");
const getDataFromFile = () => {
    let listEventCalendar = []
    fs.readFile("./db.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        listEventCalendar = JSON.parse(jsonString)
    });
    if (listEventCalendar=[]) {
        console.log("reongasdssadsad");
    }
    return listEventCalendar
}
const saveDataToFile = (listEventCalendar) => {
    fs.writeFile("./db.json", JSON.stringify(listEventCalendar), (err) => {
        if (err) {
            console.log(err);
        }
    })
}
module.exports = {
    getDataFromFile,
    saveDataToFile
}