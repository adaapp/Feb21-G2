const express = require('express');
const app = express()
let query = require('./dbqueries.js')
const dba = require('./runandbuild.js')
let db = dba.connect()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/artresources', (req, res) => {
    res.sendFile('./public/artresources.html', { root: __dirname })
})

app.get('/api/artresources', (req, res) => {
    query.getAllArtResources(db, req, res)
})

app.get('/cookingresources', (req, res) => {
    res.sendFile('./public/cookingresources.html', { root: __dirname })
})

app.get('/api/cookingresources', (req, res) => {
    query.getAllCookingResources(db, req, res)
})

app.listen(3000, () => {
    dba.init(db)
    console.log('listening on port 3000')
})