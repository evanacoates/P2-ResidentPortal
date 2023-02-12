const router = require('express').Router();
const { Accounts } = require('../../models');

//CREATE new user
/* router.post('/login', async (req, res) => {
  try {
    const dbUserData = await Residents.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
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
 */ 
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

    //const validPassword = await dbUserData.checkPassword(req.body.password);
   //console.log(dbUserData.password)
   

    if (req.body.password !== dbUserData.password) {
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
