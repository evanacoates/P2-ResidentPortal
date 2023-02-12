const router = require('express').Router();
const { Accounts } = require('../../models');

//CREATE new user
 router.post('/register', async (req, res) => {
  try {
    const dbUserData = await Accounts.create({
      user_name: req.body.username,
      password: req.body.password,
      email: req.body.email,
      unit_number: req.body.unitNumber,
      name: req.body.name,
      id: Math.random()
    });

    req.session.save(() => {
      req.session.loggedIn = true;

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
    console.log('here')
  
    
    

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'No User Found' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);
   //console.log(dbUserData.password)
   

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect  password. Please try again!' });
        console.log('incorrect password')
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
        console.log('logged in')
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
