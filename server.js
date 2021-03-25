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

app.get('/bakingresources', (req, res) => {
    res.sendFile('./public/bakingresources.html', { root: __dirname })
})

app.get('/api/bakingresources', (req, res) => {
    query.getAllBakingResources(db, req, res)
})

app.get('/bslresources', (req, res) => {
    res.sendFile('./public/bslresources.html', { root: __dirname })
})

app.get('/api/bslresources', (req, res) => {
    query.getAllBSLResources(db, req, res)
})

app.get('/workskillsresources', (req, res) => {
    res.sendFile('./public/workskillsresources.html', { root: __dirname })
})

app.get('/api/workskillsresources', (req, res) => {
    query.getAllWorkSkillResources(db, req, res)
})

app.get('/travellingaloneresources', (req, res) => {
    res.sendFile('./public/travellingaloneresources.html', { root: __dirname })
})

app.get('/api/travellingaloneresources', (req, res) => {
    query.getAllTravellingAloneResources(db, req, res)
})

app.get('/sportsresources', (req, res) => {
    res.sendFile('./public/sportsresources.html', { root: __dirname })
})

app.get('/api/sportsresources', (req, res) => {
    query.getAllSportsResources(db, req, res)
})

app.get('/gardeningresources', (req, res) => {
    res.sendFile('./public/gardeningresources.html', { root: __dirname })
})

app.get('/api/gardeningresources', (req, res) => {
    query.getAllGardeningResources(db, req, res)
})

app.get('/login', (req, res) => {
    res.sendFile('./public/login.html', { root: __dirname })
})

app.get('/api/login', (req, res) => {
    query.getMemberLogin(db, req, res)
})

app.listen(3000, () => {
    dba.init(db)
    console.log('listening on port 3000')
})