const express = require("express")
const app = express()
app.get("/", (req, res) => {
    
})
let port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('server is running');
})