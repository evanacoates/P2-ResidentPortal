const Leases = require ('./leases');
const Residents = require ('./residents');
const Accounts = require ('./accounts');

Residents.belongsTo(Accounts, {
    foreignKey: 'id',
});

Leases.belongsTo(Accounts,{
    foreignKey: 'id',
})

module.exports = {Leases, Residents, Accounts};