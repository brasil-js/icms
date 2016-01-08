var icms = require('../index.js');

module.exports = {
    'Aliquotas reajustadas em 01/01/2016': function(test) {
        test.equal(icms('ap'), 18);
        test.equal(icms('am'), 18);
        test.equal(icms('df'), 18);
        test.equal(icms('ma'), 18);
        test.equal(icms('pb'), 18);
        test.equal(icms('pe'), 18);
        test.equal(icms('rn'), 18);
        test.equal(icms('rs'), 18);
        test.equal(icms('ro'), 17.5);
        test.equal(icms('se'), 18);
        test.equal(icms('to'), 18);
        test.done();
    },
};