const app = require('express')();
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/mobile', require('./MobileSMSHandler'));

app.post('/api/email', require('./Emailhandler'));

app.post('/api/signin', require('./SignInHandler'));

app.post('/api/registration', require('./RegistrationHandler'));

app.post('/api/mobileverification', require('./DatabaseHandler'));

app.post('/api/linkedinhandler', require('./LinkedInHandler'));

app.post('/api/githubhandler', require('./GithubHandler'));

app.post('/api/deviceverification', require('./DeviceVerification'));

app.post('/api/storedevice', require('./StoreDeviceInfo'));

app.listen(3001, () => 
  console.log('Express server is running on localhost:3001')
);

