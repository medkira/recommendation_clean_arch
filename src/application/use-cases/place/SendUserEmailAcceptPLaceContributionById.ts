import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { SendUserEmailAcceptPLaceContributionByIdInterface } from "@application/interfaces/use-cases/places/SendUserEmailAcceptPLaceContributionByIdInterface";
import { SendEmail } from "@application/interfaces/utils/send-email/SendEmail";

export class SendUserEmailAcceptPLaceContributionById implements SendUserEmailAcceptPLaceContributionByIdInterface {

    constructor(
        private readonly getUserByIdRepositroy: LoadNormalUserByIdRepository,
        private readonly getPlaceByIdRepository: GetPlaceByIdRepository,
        private readonly sendEamil: SendEmail,

    ) { }
    async execute(placeId: string): Promise<SendUserEmailAcceptPLaceContributionByIdInterface.Response> {
        const place = await this.getPlaceByIdRepository.getPlaceById(placeId);
        if (!place) {
            return new PlaceNotFoundError();
        }
        const { user_id } = place;

        const user = await this.getUserByIdRepositroy.loadUserById(user_id);

        if (!user) {
            return new UserNotFoundError();
        }
        const { email } = user

        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Place Owner Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .header img {
                    width: 50px;
                    height: 50px;
                }
                .content {
                    text-align: left;
                }
                .content p {
                    line-height: 1.6;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 12px;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
             
                <div class="content">
                    <b>Hi ${user.username},</b>
                    <p>Congratulations!</p>
                    <p>Your place contribution has been accepted. You are now the owner of ${place.name}.</p>
                    <p>We are excited to have you onboard and look forward to your contributions.</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        `;


        const payload = {
            email,
            subject: "You have become a place owner.",
            html
        }


        this.sendEamil.send(email, payload);
    }
}