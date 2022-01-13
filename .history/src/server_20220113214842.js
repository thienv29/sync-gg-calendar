const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('sync calendar')
})
let po
app.listen(, () => {
    console.log('server is running');
})