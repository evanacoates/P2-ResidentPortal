const router = require('express').Router();
const { Accounts, Leases, Residents } = require('../../models');

//CREATE new user
 router.post('/register', async (req, res) => {
  try {
    const dbUserData = await Accounts.create({
      user_name: req.body.username,
      password: req.body.password,
      email: req.body.email,
      unit_number: req.body.unitNumber,
      name: req.body.name,
      id: Math.random() * (9999 - 1111) + 1111,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.data = dbUserData;
      

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Accounts.findOne({
      where: {
        user_name: req.body.username,
      },
    });

   
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'No User Found' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
   
   

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password. Please try again!' });
        console.log('incorrect password');
        
      return;
    }
    
    req.session.save(() => {
      
      req.session.loggedIn = true;
      req.session.data = dbUserData;
      

      
      console.log(req.session)
      

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
        
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
