const express = require('express')
const ctrl = require('./controllers/messages_controller')
const app = express()
app.use(express.json())
const port = 3001
const endPoint = '/api/messages'

app.post(`${endPoint}`, ctrl.create)
app.get(`${endPoint}`, ctrl.read)
app.put(`${endPoint}/:id`, ctrl.update)
app.delete(`${endPoint}/:id`, ctrl.delete)


app.listen(port, ()=> console.log(`Server is listening to port ${port}`))