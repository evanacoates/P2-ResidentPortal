const router = require('express').Router();
//const { Residents } = require('./models');
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
   
    res.render('user', {layout : false});
});


router.get('/register', (req, res) => {
    
    res.render('register', {
    layout : false,
    logged_in : req.session.logged_in});
});


router.get('/homepage', (req, res) => {
    
    res.render('homepage', {
    layout : false,
    logged_in : req.session.logged_in});
});

module.exports = router; 