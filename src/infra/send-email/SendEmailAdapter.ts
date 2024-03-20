import nodemailer from 'nodemailer';
import { SendEmail } from "@application/interfaces/send-email/SendEmail";
import { MailOptionsProps } from "@domain/entities/MailOptions";
import dotenv from "dotenv";
dotenv.config({ path: "src/main/config/env/.env" });

export class SendEmailAdapter implements SendEmail {
  async sendEmail(options: MailOptionsProps): Promise<string> {
    return new Promise((resolve, reject) => {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT), // Parse the port string to integer
        secure: process.env.EMAIL_SECURE === 'true', // Parse the secure string to boolean
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text,
      }, (error, info) => {
        if (error) {
          console.error("Error occurred while sending email:", error);
          reject(error); // Reject the promise with the error
        } else {
          console.log("Message sent: %s", info.messageId);
          resolve(info.messageId); // Resolve the promise with the message ID
        }
      });
    });
  }
}
