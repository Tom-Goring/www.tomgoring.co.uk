require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const port = process.env.port || 3000;
 
app.post("/contactMe",function(req,res)
{
    let mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });
    mailOpts = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;',
        to: process.env.GMAIL_USER,
        subject: 'New message from contact form at tomgoring.co.uk',
        text: `${req.body.name} (${req.body.email}) says :${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
            res.render('contact-failure');
        } else {
            res.render('contact-success');
        }
    });
});
 
app.listen(port, function () {
    var datetime = new Date();
    var message = "Server running on Port:- " + port + " Started at :- " + datetime;
    console.log(message);
});
