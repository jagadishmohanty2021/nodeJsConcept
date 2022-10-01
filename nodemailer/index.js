const nodemailer=require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jagadish.lokanath@softsuave.com',
      pass: 'aokghnpchrrbbwfa'
    }
  });
  
  let mailOptions = {
    from: 'jagadish.lokanath@softsuave.com',
    to: 'udhayasingh.muthaiah@softsuave.com',
    subject: 'Sending Email using nodemailer in Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });