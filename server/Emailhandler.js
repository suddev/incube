const nodemailer = require('nodemailer');

const Emailhandler = (req, res) => {
    const receiver_email = req.query.email;
    const otp = Math.floor(Math.random()*(100000-10000))+10000;  // Generating a 5-digit random number as otp
    
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');

    if(receiver_email){
      const mailOptions = {
        from: process.env.SENDER_MAIL_ID, // sender address
        to: receiver_email, // list of receivers
        subject: 'Verification Email', // Subject line
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
          res.status(400).send({status:400, message: 'Error occured while sending'});
        else{
          info['otp'] = otp
          res.status(200).send(info);
        }
      });
    }
    else
      res.status(400).send({status:400, message: 'Email Id cannot be null'});
  };

  module.exports = Emailhandler;