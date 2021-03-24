/*
    Make login page - SEMI DONE
    set up for other resources, make them do nothing - DONE
    make header fit top of page - ANNOYING ME
*/

const sqlite3 = require('sqlite3').verbose();

function getAllArtResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Art"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            res.send({ error: 'Oops! No art resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllCookingResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Cooking"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no cooking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllBakingResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Baking"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllBSLResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "BSL"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllWorkSkillsResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Work Skills"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllTravellingAloneResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Travelling Alone"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllSportsResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Sports"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

function getAllGardeningResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Gardening"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            console.log('no baking found')
            // res.send({ error: 'Oops! No cooking resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

module.exports = { getAllArtResources, getAllCookingResources, getAllBSLResources, getAllBakingResources, getAllWorkSkillsResources, getAllTravellingAloneResources, getAllSportsResources, getAllGardeningResources }