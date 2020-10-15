const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000


app.set('view engine', 'ejs')

app.use('/public', express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 


const indexRouter = require('./routers/index')
app.use('/', indexRouter)



app.listen(port, () =>{
    console.log('mon port est: ', port);
})