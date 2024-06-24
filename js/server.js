const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

// Setup SendGrid
sgMail.setApiKey('YOUR_SENDGRID_API_KEY'); // Ganti dengan API Key SendGrid Anda

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const msg = {
        to: 'awildanjauhari@gmail.com', // Ganti dengan email penerima
        from: email,
        subject: subject,
        text: message,
        html: `<strong>${message}</strong>`,
    };

    sgMail.send(msg)
        .then(() => {
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Failed to send email');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
