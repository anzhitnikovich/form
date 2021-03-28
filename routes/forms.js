const { Router } = require('express')
const router = Router()
const Form = require('../models/form')
const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');


router.get('/', async (req, res) => {
    const forms = await Form.find({})
    res.render('index',{
        title: 'Main', 
        forms
    })
})

router.get('/sign_in',(req, res) =>{
    res.render('sign_in',{
        title: 'Sign in',
    })
})
router.get('/sign_up',(req, res) =>{
    res.render('sign_up', {
        title: 'Sign up'
    })
})


router.post('/sign_up', 

    check ('email','invalid name').isEmail(),
    check('password').isLength({min: 6}), 
    async (req, res)=>{
    const form = new Form({
      email: req.body.email,
      username: req.body.username,
      surname: req.body.surname,
      date: req.body.date,
      phone: req.body.phone,
      password: req.body.password,
      password2: req.body.password2,
    })


    await form.save()
    res.redirect('/')
})








module.exports = router
