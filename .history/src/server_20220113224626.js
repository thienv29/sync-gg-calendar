const express = require("express")
const app = express()
app.get("/", (req, res) => {
    setInterval(() => {
        
    }, interval);
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})