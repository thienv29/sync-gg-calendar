const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('sync calendar')
})
let port = process.env.PORT
app.listen(, () => {
    console.log('server is running');
})