const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send('hello world')
    setInterval(() => {
        let start = '2020-10-03T00:00:00.000Z';
        let end = '2022-10-04T00:00:00.000Z';

        getEvents(start, end)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, 20000)
})
app.listen(3000, () => {
    console.log('server is running');
})