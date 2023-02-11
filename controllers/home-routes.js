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
   
    res.render('user', {layout : false});
});



router.get('/homepage', (req, res) => {
    
    res.render('loggedIn', {layout : false});
});

module.exports = router; 