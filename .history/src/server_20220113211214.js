const express = require("express")
const app = express()
app.get("/",(req,res) => {
  res.send('hello world')
  setInterval(() => {
    
  },600)
})
app.listen(3000,() => {
  console.log('server is running');
})