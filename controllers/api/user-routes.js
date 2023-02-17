const router = require('express').Router();
const { Accounts, Leases, Residents } = require('../../models');

//CREATE new user
 router.post('/register', async (req, res) => {
  const randomId = Math.trunc(Math.random() * (9999 - 1111) + 1111)
  const randonRent = Math.trunc(Math.random() * (2000-1000) + 1000 )
  
  try {
    const dbAccountData = await Accounts.create({
      user_name: req.body.username,
      password: req.body.password,
      email: req.body.email,
      unit_number: req.body.unitNumber,
      name: req.body.name,
      id: randomId,
      billing_in: "please fill in",
    });

    const dbResidentData = await Residents.create({
      id: randomId,
      username: req.body.username,
      address: "please fill in info",
      email: req.body.email,
      unit_number: req.body.unitNumber,
      name: req.body.name,
      phone_number: "please fill in info",
      password: req.body.password,
     
    });
  
    const dbLeaseData = await Leases.create({
      id: randomId,
      lease_holder: req.body.name,
      email: req.body.email,
      leasing_term: "12 months",
      name: req.body.name,
      rent_cost: randonRent,
    });

    
    req.session.save(() => {
      
      req.session.data = [dbAccountData,dbLeaseData,dbResidentData]
      console.log(req.session.data)
      

      res.status(200).json(dbAccountData);

      const userData = req.session.data;
      
    });
    
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  
 
  
    
 

});




// Login
router.post('/login', async (req, res) => {
  try {
    const dbAccountData = await Accounts.findOne({
      where: {
        user_name: req.body.username,
      },
    });

   
    if (!dbAccountData) {
      res
        .status(400)
        .json({ message: 'No User Found' });
      return;
    }

    const validPassword = await dbAccountData.checkPassword(req.body.password);
   
   

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password. Please try again!' });
        console.log('incorrect password');
        
      return;
    }
    
    req.session.save(() => {
      
      req.session.loggedIn = true;
      req.session.data = dbAccountData
      

      
      console.log(req.session)
      

      res
        .status(200)
        .json({ user: dbAccountData, message: 'You are now logged in!' });
        
        //alert('You are now logged in')
        //res.redirect('/user')
       
        
        
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});




module.exports = router;
