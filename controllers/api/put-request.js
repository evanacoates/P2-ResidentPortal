const router = require('express').Router();
const { Accounts, Residents, Leases } = require("../../models");

router.put('/leases', async (req, res) => {
    try {
      const dbUserData = await Leases.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'There are no leases based on this user information.' });
        return;
      }
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
})

router.put('/resident', async (req, res) => {
  try {
    console.log(req.body)
    const dbUserData = await Residents.update(req.body, {
      where: {
        id: req.session.data.id
      },
    });
    let rowsAffected = dbUserData[0];

    if (rowsAffected === 0) {
      res.status(404).json({ message: 'There are no accounts with this user information' });
      return;
    }

    res.status(200).json(dbUserData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

    
        
router.put('/account', async (req, res) => {
  try {
    console.log(req.body)
    const dbUserData = await Accounts.update(req.body, {
      where: {
        id: req.session.data.id
      },
    });
    let rowsAffected = dbUserData[0];

    if (rowsAffected === 0) {
      res.status(404).json({ message: 'There are no accounts with this user information' });
      return;
    }

    res.status(200).json(dbUserData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
                    
module.exports = router;
