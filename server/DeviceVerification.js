const nodemailer = require('nodemailer');
var twilio = require('twilio');
const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
    );

const DeviceVerification =  (req, res) => {
    const ip = req.ip;
    console.log('IP ', ip);
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    // Make a database call to check if the user is using different device by matching ip
    // If no IP  is present return 'user is verified'
    
    if(ip){
      res.status(200).send({message: 'user is verified'})
    } else{
        //SMS
        const otp = Math.floor(Math.random()*(100000-10000))+10000;  // Generating a 5-digit random number as otp
        const to_mobile = '+917543990436'; // fetch users mobile number

        client.messages
            .create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: to_mobile,
            body: `HELLO PKC PRASHANT. Your otp is ${otp}`
            })
            .catch(err => res.status(400).send({status:400, message: 'Error occured while sending SMS'}))
        
        //EMAIL
        const receiver_email = 'pc22230@gmail.com'; //Fetch users email  from  database
        const mailOptions = {
            from: process.env.SENDER_MAIL_ID, // sender address
            to: receiver_email, // list of receivers
            subject: 'Device Verification Email', // Subject line
            html: `Hi Prashant, How you doin. Your Otp is ${otp}`// plain text body, Otp will be random
        };
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SENDER_MAIL_ID,
                pass: process.env.SENDER_MAIL_PASSWORD
            }
        });
    
        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
            res.status(400).send({status:400, message: 'Error occured while sending Email'});
        });
        res.status(200).send({otp: otp, message:'otp generated'});
    }
  };

  module.exports = DeviceVerification;