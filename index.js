const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use('/static', express.static(__dirname + '/static'))

app.get('*', (req, res) => {
    res.sendFile("index.html", {root: path.join(__dirname, "./static")})
})


app.post('/reg-data', (req, res) => {
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
     if(err) {
         res.status(500).send("User hasn't been added")
     } else {
         res.status(201).send("User has been added successfully")
     }
    });

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})