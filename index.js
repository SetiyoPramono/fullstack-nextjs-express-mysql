const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const routerMahasiswa = require('./routers/mahasiswa')

//untuk menerima req.body
app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use(cors({
    origin: '*'
}));

app.get('/about',(req,res)=>{
    res.send('About')
})

app.use(routerMahasiswa)

app.listen(port, ()=>{
    console.log('server berjalan pada port ' + port)
})