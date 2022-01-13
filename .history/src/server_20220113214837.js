const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('sync calendar')
})
app.listen(, () => {
    console.log('server is running');
})