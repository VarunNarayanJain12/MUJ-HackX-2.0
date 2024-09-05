const express = require('express');
const nodemailer = require('nodemailer');
const Twilio = require('twilio');
const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Example endpoint to handle subscriptions
app.post('/subscribe', (req, res) => {
    const { email, phoneNumber } = req.body;

    // Save subscription details to your database (implement this as needed)
    
    res.status(200).send('Subscription successful!');
});

// Function to fetch daily content
const getDailyContent = async () => {
    try {
        // Replace with your actual content fetching logic
        const response = await axios.get('https://api.example.com/daily-news');
        const data = response.data;

        return {
            emailContent: data.emailContent,
            whatsappContent: data.whatsappContent
        };
    } catch (error) {
        console.error('Error fetching daily content:', error);
        return {
            emailContent: 'Error retrieving daily content.',
            whatsappContent: 'Error retrieving daily content.'
        };
    }
};

// Function to send emails
const sendEmail = async (email, subject, text) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: text,
        });
        console.log('Email sent to', email);
    } catch (error) {
        console.error('Error sending email to', email, ':', error);
    }
};

// Function to send WhatsApp messages
const sendWhatsAppMessage = async (phoneNumber, message) => {
    try {
        await twilioClient.messages.create({
            body: message,
            from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
            to: `whatsapp:${phoneNumber}`,
        });
        console.log('WhatsApp message sent to', phoneNumber);
    } catch (error) {
        console.error('Error sending WhatsApp message to', phoneNumber, ':', error);
    }
};

// Schedule a task to send messages daily at midnight
cron.schedule('0 0 * * *', async () => {
    // Fetch daily content
    const dailyContent = await getDailyContent();

    // Fetch subscribers from your database
    // This is just a placeholder; replace with actual database logic
    const subscribers = [
        { email: 'subscriber1@example.com', phoneNumber: '+1234567890' },
        { email: 'subscriber2@example.com', phoneNumber: '+0987654321' }
    ];

    subscribers.forEach(subscriber => {
        sendEmail(subscriber.email, 'Daily Update', dailyContent.emailContent);
        sendWhatsAppMessage(subscriber.phoneNumber, dailyContent.whatsappContent);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
