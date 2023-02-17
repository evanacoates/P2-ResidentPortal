const router = require('express').Router();
const { Accounts, Residents, Leases } = require("../../models");


router.put('/lease', async (req, res) => {
  try {
        console.log(req.body)
        const dbLeaseData = await Leases.update(req.body, {
          where: {
              id: req.session.data.id
          },
        });
        let rowsAffected = dbLeaseData[0];
                
        if (rowsAffected === 0) {
          res.status(404).json({ message: 'There are no accounts with this user information' });
          return;
        }
                
        res.status(200).json(dbLeaseData);
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});


router.put('/resident', async (req, res) => {
  try {
        console.log(req.body)
        const dbResidentData = await Residents.update(req.body, {
          where: {
              id: req.session.data.id
          },
        });
        let rowsAffected = dbResidentData[0];
                
        if (rowsAffected === 0) {
          res.status(404).json({ message: 'There are no accounts with this user information' });
          return;
        }
                
        res.status(200).json(dbResidentData);
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});
            
router.put('/account', async (req, res) => {
  try {
        console.log(req.body)
        const dbAccountData = await Accounts.update(req.body, {
          where: {
              id: req.session.data.id
          },
        });
        let rowsAffected = dbAccountData[0];
                
        if (rowsAffected === 0) {
          res.status(404).json({ message: 'There are no accounts with this user information' });
          return;
        }
                
        res.status(200).json(dbAccountData);
  } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});
module.exports = router;
