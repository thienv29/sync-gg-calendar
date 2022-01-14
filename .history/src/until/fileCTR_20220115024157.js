const fs = require("fs");
const getDataFromFile =  () => {
    await fs.readFileSync("./db.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        return Pro
    });
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