/*
    Make login page
    set up for other resources, make them do nothing
    make header fit top of page
    make buttons closer to link
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

module.exports = { getAllArtResources, getAllCookingResources }