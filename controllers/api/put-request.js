const { Accounts } = require("../../models");

router.put('/Leases', async (req, res) => {
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

    router.put('/Residents', async (req, res) => {
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
    

            router.put('/Residents', async (req, res) => {
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
            
            router.put('/Accounts', async (req, res) => {
                try {
                    const dbUserData = await Accounts.update(req.body, {
                    where: {
                      id: req.params.id,
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