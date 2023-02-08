const router = require('express').Router();

router.get('/', async (req, res) => {
    
    res.render('homepage', {layout : false});
    
    
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



router.get('/login', (req, res) => {
    
    res.render('login', {layout : false});
});

module.exports = router; 