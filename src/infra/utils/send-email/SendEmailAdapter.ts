import { SendEmail } from "@application/interfaces/utils/send-email/SendEmail";
import * as nodemailer from 'nodemailer';


export class SendEmailAdapter implements SendEmail {
    constructor() { }

    send(email: string, payload: SendEmail.payload): boolean {

        const { subject, html, text } = payload;


        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SERVER_EMAIL,
                pass: process.env.SERVER_EMAIL_PASS,
            },

            tls: {
                rejectUnauthorized: false
            }
        });
        const message = {
            from: process.env.SERVER_EMAIL,
            to: email,
            subject: subject,
            text: text,
            html: html
        };

        transporter.sendMail(message, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                // ? for test
                // console.log('Email sent successfully!');
            }
        });
        return true;
    }

}
