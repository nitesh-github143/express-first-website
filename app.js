const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'))
})

app.use('/', router)
app.listen(port, () => {
    console.log('server started')
})