const router = require('express').Router();

router.get('/', async (req, res) => {
    res.redirect('/login')
    return;

})

router.get('/homepage', async (req, res) => {
    if(req.session.loggedIn)
    res.render('homepage');
    else{
        res.redirect('login')
        return;
    }
        
});



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
    res.render('login');
});
  
module.exports = router;