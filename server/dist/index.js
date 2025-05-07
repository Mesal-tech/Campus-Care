import express from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import nodemailer from "nodemailer";
import streamTokenRouter from './stream.js';
import { getStudentEmailTemplate, getCounselorEmailTemplate } from './emailTemplates.js';
dotenvConfig();
const app = express();
const router = express.Router();
app.use(cors({
    origin: 'https://e43e96d1-3599-4764-a7b3-6388cc9b3f4a-00-bmdkr39k9qg7.picard.replit.dev',
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use(express.json());
// SMTP configuration for nodemailer using Gmail
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
});
console.log('SMTP transporter configured');
// Test SMTP connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP Verification Error:', error);
    }
    else {
        console.log('SMTP Connection Successful');
    }
});
// New route: send email notification
router.post("/api/notify", async (req, res, next) => {
    console.log('Registered /api/notify route');
    console.log('Received /api/notify request');
    const { studentEmail, counselorEmail, meetingDetails } = req.body;
    console.log('Request body:', { studentEmail, counselorEmail, meetingDetails });
    if (!studentEmail || !counselorEmail || !meetingDetails) {
        console.log('Missing required fields in request');
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        // Prepare email for student
        const studentEmailTemplate = getStudentEmailTemplate(meetingDetails);
        await transporter.sendMail({
            from: `"Counseling App" <${process.env.GMAIL_USER}>`,
            to: studentEmail,
            subject: studentEmailTemplate.subject,
            html: studentEmailTemplate.html,
        });
        console.log('Email sent successfully to student:', studentEmail);
        // Prepare email for counselor
        const counselorEmailTemplate = getCounselorEmailTemplate(meetingDetails);
        await transporter.sendMail({
            from: `"Counseling App" <${process.env.GMAIL_USER}>`,
            to: counselorEmail,
            subject: counselorEmailTemplate.subject,
            html: counselorEmailTemplate.html,
        });
        console.log('Email sent successfully to counselor:', counselorEmail);
        res.status(200).json({ message: "Emails sent successfully" });
    }
    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: "Failed to send email" });
    }
});
app.use(router); // Mount the router to handle /api/notify
app.use('/api/stream', streamTokenRouter);
const PORT = parseInt(process.env.PORT || '3000');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
