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

    router.put('/residents', async (req, res) => {
        try {
            const dbUserData = await Residents.update(req.body, {
                where: {
                  id: req.params.id,
                },
              });
              if (!dbuserData[0]) {
                res.status(404).json({ message: 'There are no residents with this user information.' });
                return;
              }
              res.status(200).json(dbUserData);
            } catch (err) {
              res.status(500).json(err);
            }
        })
    
          const dynamicBody = {}
            
            router.put('/account', async (req, res) => {
                try {
                  console.log(req.body)
                    const dbUserData = await Accounts.update(req.body, {
                    where: {
                      id: req.params,
                    },
                    });
                    if (!dbuserData[0]) {
                    res.status(404).json({ message: 'There are no accounts with this user information' });
                    return;
                     }
                    res.status(200).json(dbUserData);
                    } catch (err) {
                    res.status(500).json(err);
                        }
                    });
                    
module.exports = router;
