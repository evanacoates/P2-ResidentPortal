const router = require('express').Router();
const { Residents, Accounts, Leases } = require('../models');

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
        try {
                const residentData = await Residents.findByPk(req.session.data.id);
                console.log(residentData)
                const resident = residentData.get({ plain: true })
                res.render('resident', {...resident});
              } catch (err) {
                res.status(500).json(err);
              }
            }else{
                res.redirect('/')
            }
});


router.get('/register', (req, res) => {
    
    res.render('register')
    
});




router.get('/homepage', (req, res) => {
    
    if(req.session.loggedIn){
        res.render('homepage');
    }else{
        res.redirect('/')
    }
    
});


   
router.get('/account', async (req, res) => {
console.log(req.session.data)
    if(req.session.loggedIn){   
      
    try {
            const accountData = await Accounts.findByPk(req.session.data.id);
            const account = accountData.get({ plain: true })
            
            console.log(accountData)
            res.render('account', {...account});
          } catch (err) {
            res.status(500).json(err);
          }
        }else{
            res.redirect('/')
        }
        
        });





router.get('/lease', async (req, res) => {
   
    if(req.session.loggedIn){    
        try {
                const leaseData = await Leases.findByPk(req.session.data.id);
                console.log(leaseData)
                const lease = leaseData.get({ plain: true })
                res.render('lease', {...lease});
              } catch (err) {
                res.status(500).json(err);
              }
            }else{
                res.redirect('/')
            }
            
            
});

module.exports = router; 