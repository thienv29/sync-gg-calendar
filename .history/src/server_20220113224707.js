const express = require("express")
const app = express()
app.get("/", (req, res) => {
    let start = '2020-10-03T00:00:00.000Z';
let end = '2022-10-04T00:00:00.000Z';
    setInterval(() => {
        
    }, 6000);
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})