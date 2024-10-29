// global-teardown.js
const { exec } = require('child_process');

module.exports = async () => {
  exec('npx playwright show-report', (err) => {
    if (err) {
      console.error('Error opening HTML report:', err);
    }
  });
};
