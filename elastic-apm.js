const apm = require('elastic-apm-node').start({
  serviceName: process.env.APM_SERVICE_NAME || 'node-apm-ocp',
  secretToken: process.env.APM_SECRET_TOKEN || '',
  serverUrl: process.env.APM_SERVER_URL || 'http://fleet01.heritage.africa:8200/',
  environment: process.env.NODE_ENV || 'production'
});

module.exports = apm;
