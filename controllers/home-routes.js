const router = require('express').Router();
const { Residents } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
   if (req.session){
    console.log("req.session: ", req.session)
   }

   if (req.session.loggedIn){
    console.log("req.session.loggedIn: ", req.session.loggedIn)
   }
    
    
     if (req.session && req.session.loggedIn) {
        res.redirect('/homepage');
        return;
      }
       return res.render('login');
})

router.get('/user', async (req, res) => {
   
    res.render('user');
});

router.get('/register', (req, res) => {
    
    res.render('register', {
    logged_in : req.session.logged_in});
});

router.get('/homepage', (req, res) => {
    console.log(req.session.loggedIn)
    res.render('homepage', {
    logged_in : req.session.logged_in});
    
});

router.get('/account', async (req, res) => {
   
    res.render('account');
});

router.get('/lease', async (req, res) => {
   
    res.render('lease', {
        logged_in : req.session.logged_in});

});

module.exports = router; 