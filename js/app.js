// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const app = express();
const port = 3000;

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;

    const msg = {
        to: 'awildanjauhari@gmail.com', // Ganti dengan email penerima
        from: 'awildanjauhari@gmail.com',  // Ganti dengan email pengirim yang terverifikasi
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    sgMail
        .send(msg)
        .then(() => {
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
