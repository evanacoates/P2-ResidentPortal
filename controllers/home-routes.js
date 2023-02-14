const router = require('express').Router();
const { Residents, Accounts } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    
   
    
    if (req.session.loggedIn) {
        res.redirect('/homepage');
       
    }else{
       res.render('login');
    }
})


router.get('/resident', async (req, res) => {
   
    if(req.session.loggedIn){
        res.render('resident');
    }else{
        res.redirect('/')
    }
});


router.get('/register', (req, res) => {
    if(!res.session.loggedIn){
    res.render('register')
    }else{
        res.redirect('/')
    }
});




router.get('/homepage', (req, res) => {
    
    if(req.session.loggedIn){
        res.render('homepage');
    }else{
        res.redirect('/')
    }
    
});

router.get('/account', async (req, res) => {
    console.log(res)
   if(req.session.loggedIn){
    res.render('account');
   }else{
    res.redirect('/')
   }
   

});



router.get('/lease', async (req, res) => {
   
    if(req.session.loggedIn){
        res.render('lease');
    }else{
        res.redirect('/')
    }
});

module.exports = router; 