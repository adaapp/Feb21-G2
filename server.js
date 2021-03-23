const express = require('express');
const app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('./Public/index.html', { root: __dirname })
})

app.get('/artresources', (req, res) => {
    res.sendFile('./Public/artresources.html', { root: __dirname })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})