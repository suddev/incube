var twilio = require('twilio');
const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );

const MobileSMShandler = (req, res) => {
    console.log('HURRAYYYYY')
    const to_mobile = req.query.mobile;
    const otp = Math.floor(Math.random()*(100000-10000))+10000;  // Generating a 5-digit random number as otp
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    if(to_mobile){
      client.messages
        .create({
          from: process.env.TWILIO_PHONE_NUMBER,
          to: to_mobile,
          body: `HELLO PKC PRASHANT. Your otp is ${otp}`
        })
        .then(message => {
          message['otp'] = otp;
          res.status(200).send(message)
        })
        .catch(err => res.status(400).send({status:400, message: 'Error occured while sending'}))
    }
    else
      res.status(400).send({status:400, message: 'Mobile Number cannot be null'});
};

module.exports = MobileSMShandler;