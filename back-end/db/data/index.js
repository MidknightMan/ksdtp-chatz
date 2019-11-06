const ENV = process.env.NODE_ENV || 'development';

const devData = require('./dev-data/users.js');
const testData = require('./test-data/users.js');

const data = {
  development: devData,
  test: testData,
  production: devData
};

module.exports = data[ENV];
