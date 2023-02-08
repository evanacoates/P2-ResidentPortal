const router = require('express').Router();

router.get('/', async (req, res) => {
    
    res.render('main');
    /* if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
      }
     */  //return res.render('login');
    // res.redirect('/login')
    //return;

})

//router.get('/homepage', async (req, res) => {
    /* if(req.session.loggedIn)
    res.render('homepage');
    else{
        res.redirect('login')
        return;
     *///}
        
//});



router.get('/login', (req, res) => {
    
    res.render('login');
});

module.exports = router; 