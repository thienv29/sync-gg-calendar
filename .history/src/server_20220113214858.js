const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('sync calendar')
})
let port = process.env.PORT || 8080
app.listen(, () => {
    console.log('server is running');
})