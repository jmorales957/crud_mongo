const express = require('express');
const app = express();
const UserRoutes = require('./routes/user')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/api/v1/users',UserRoutes)

const db = require('./database/database')

app.listen(3000, () => {
    console.log(3000)
})