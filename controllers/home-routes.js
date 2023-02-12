const router = require('express').Router();
const { Residents } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    
    res.render('login');
    
    
    /* if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
      }
     */  //return res.render('login');
    // res.redirect('/login')
    //return;

})

router.get('/user', async (req, res) => {
   
    res.render('user');
});


router.get('/register', (req, res) => {
    
    res.render('register', {
    logged_in : req.session.logged_in});
});


router.get('/homepage', (req, res) => {
    
<<<<<<< HEAD
    res.render('loggedIn', {layout : false});
=======
    res.render('homepage', {
    logged_in : req.session.logged_in});
>>>>>>> b77525cb5ea67c3bc78e31beef114e4a97ab33f1
});

router.get('/account', async (req, res) => {
   
    res.render('account');
});

router.get('/lease', async (req, res) => {
   
    res.render('leases', {
        logged_in : req.session.logged_in});
});


module.exports = router; 