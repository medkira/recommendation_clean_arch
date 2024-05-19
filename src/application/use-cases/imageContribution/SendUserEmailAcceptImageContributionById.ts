import { PlaceNotFoundError } from "@application/errors/PlaceNotFoundError";
import { UserNotFoundError } from "@application/errors/UserNotFoundError";
import { GetImageContributionByIdRepository } from "@application/interfaces/repositories/imageContribution/GetImageContributionByIdRepository";
import { LoadNormalUserByIdRepository } from "@application/interfaces/repositories/normalUser/LoadNormalUserByIdRepository";
import { GetPlaceByIdRepository } from "@application/interfaces/repositories/place/GetPlaceByIdRepository";
import { SendUserEmailAcceptImageContributionByIdInterface } from "@application/interfaces/use-cases/imageContribution/SendUserEmailAcceptImageContributionByIdInterface";
import { SendEmail } from "@application/interfaces/utils/send-email/SendEmail";

export class SendUserEmailAcceptImageContributionById implements SendUserEmailAcceptImageContributionByIdInterface {

    constructor(
        private readonly getUserByIdRepositroy: LoadNormalUserByIdRepository,
        private readonly getImageContributionById: GetImageContributionByIdRepository,
        private readonly sendEamil: SendEmail,
        private readonly getPlaceById: GetPlaceByIdRepository

    ) { }
    async execute(imageId: string): Promise<SendUserEmailAcceptImageContributionByIdInterface.Response> {
        const image = await this.getImageContributionById.GetImageContributionById(imageId);
        if (!image) {
            return new PlaceNotFoundError();
        }
        const { user_id, user_name, place_id } = image;

        const user = await this.getUserByIdRepositroy.loadUserById(user_id);

        if (!user) {
            return new UserNotFoundError();
        }

        const place = await this.getPlaceById.getPlaceById(place_id!);
        if (!place) {
            return new PlaceNotFoundError();
        }


        const { email } = user
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Image Contribution Confirmation</title>
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
                    <p>Thank you for your image contribution!</p>
                    <p>We are thrilled to inform you that your image for ${place.name} has been successfully accepted. We appreciate your efforts and look forward to more of your valuable contributions.</p>
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
            subject: "Thank you for your image contribution!",
            html
        };

        this.sendEamil.send(email, payload);
    }
}