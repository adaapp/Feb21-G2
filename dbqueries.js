const sqlite3 = require('sqlite3').verbose();

function getAllArtResources(db, req, res) {
    db.all(`SELECT * FROM resource WHERE interest = "Art"`, (err, rows) => {
        if (err) {
            console.error(err.message)
        }
        if (!rows) {
            res.send({ error: 'no art resources found' })
        }
        let obj = { artResources: { } }
            rows.forEach((row) => {
                obj.artResources[row.ResourceID] = row
            })
        res.send(obj)
    })
}

module.exports = { getAllArtResources }