require('dotenv').config();

const nodemailer = require('nodemailer');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.port || 3000;

// POST route from contact form
app.post('/contactMe', function (req, res) {
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
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        if (error) {
            res.header("Access-Control-Allow-Origin", "*");
            res.json({"message":"Failed to send mail for some reason."});
            res.json({"statusCode":"500"});
            res.sendStatus(500);
        }
        else {
            res.header("Access-Control-Allow-Origin", "*");
            res.json({"message":"Mail sent successfully"});
            res.json({"statusCode":"200"});
            res.sendStatus(200);
        }
    });
});
 
app.listen(port, function () {
    let datetime = new Date();
    let message = "Server running on Port:- " + port + " Started at :- " + datetime;
    console.log(message);
});
