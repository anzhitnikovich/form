const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const formRoutes =  require('./routes/forms')
const path = require('path')
const expressValidator = require('express-validator')
const expressSession = require('express-session')
const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app =  express()
const hbs = exphbs.create({
    defaultLayout:'main',
    extname: 'hbs'
})


app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')
app.use(bodyParser.urlencoded({extended: false}))

app.use(formRoutes)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'css')))









async function start()
{
    try{
        await mongoose.connect(
            'mongodb+srv://nastya:1234@cluster0.wmcxx.mongodb.net/forms',
            {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, ()=>{
            console.log('Server has been started')
        })

    }catch(e){
        console.log(e)

    }
}

start()


