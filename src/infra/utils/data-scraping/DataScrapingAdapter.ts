import { DataScrapingByUrlInterface } from '@application/interfaces/use-cases/dataScraping/DataScrapingByUrlInterface';
import { Place } from '@domain/entities/Place';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ApifyClient } from 'apify-client';
export class DataScrapingAdapter {



    async DataScraping({ url = "tripadivisor", placeType = "restaurant" }: DataScrapingByUrlInterface.Request): Promise<Place[]> {
        // Initialize the ApifyClient with API token
        const client = new ApifyClient({
            token: process.env.Apify_KEY
        });


        const generativeModel = new GoogleGenerativeAI(process.env.GOOGLE_AI);
        async function generateText(promptText: string) {
            const model = generativeModel.getGenerativeModel({ model: 'gemini-pro' })
            try {
                // const imageData = Buffer.from(imageBuffer).toString('base64');
                const result = await model.generateContent([promptText]);
                const response = result.response;
                const text = response.text();
                // console.log(text);
                return text;

            } catch (error) {
                console.error(error);
            }



        }

        // const Prompt = " response with array  json NOTHING ALSE. provide a response in a structured JSON format that matches the following json {name: sting, type: placeTypes ,location: string, placeImage?: sting} data  for restaurants in  tunisie."
        const Prompt = "give me json limit 10 json only {name: sting, type: placeTypes ,location: string, placeImage?: sting} data for " + placeType + " tunisia(monastir, sousse, mahdia ) from " +
            url + " just response with array with json NOTHING ALSE"
        function removeCodeMarkers(text: string) {
            // Check if the text starts and ends with the code marker
            if (text.startsWith("```json") && text.endsWith("```")) {
                // Remove the first and last lines (containing the markers)
                const lines = text.split("\n");
                lines.shift(); // Remove the first element (marker)
                lines.pop();   // Remove the last element (marker)
                return lines.join("\n"); // Join the remaining lines back
            } else {
                // Text doesn't have markers, return it as is
                return text;
            }
        }

        const text = await generateText(Prompt);
        // console.log(removeCodeMarkers(text!));
        // console.log(text)
        // console.log(JSON.parse(removeCodeMarkers(text!)));

        const data = JSON.parse(removeCodeMarkers(text!))
        return data;
    }




}

// Prepare Actor input
// const input = {
//     "currency": "TND",
//     "includeAiReviewsSummary": false,
//     "includeAttractions": false,
//     "includeHotels": true,
//     "includePriceOffers": false,
//     "includeRestaurants": true,
//     "includeTags": false,
//     "includeVacationRentals": false,
//     "language": "en",

//     "startUrls": [
//         {
//             "url": "https://www.tripadvisor.com/Restaurants-g297943-Hammamet_Nabeul_Governorate.html"
//         }
//     ]
// }

// const run = await client.actor("dbEyMBriog95Fv8CW").call(input);

// // Fetch and print Actor results from the run's dataset (if any)
// console.log('Results from dataset');
// const { items } = await client.dataset(run.defaultDatasetId).listItems();
// items.forEach((item) => {
//     console.dir(item);
// });
// console.log(items.toString);

// data cleaning with ai

// Prepare Actor input
// const input = {
//     "currency": "TND",
//     "includeAiReviewsSummary": false,
//     "includeAttractions": false,
//     "includeHotels": true,
//     "includePriceOffers": false,
//     "includeRestaurants": t
//     const Prompt = ' provide me 10 restaurants in tunisie fromtripadvisor / monastir / sousse / mahdia make the provided data in array json struncture like this(just response with array nothing ALSE) ' +
//         `
//   {
//   id: string;
//   user_id: string;
//   name: string;
//   type: placeTypes;
//   location: string;
//   description: string;
//   url: string;
//   placeImage?: sting
//   is_verified: boolean;

//   }`rue,
//     "includeTags": false,
//     "includeVacationRentals": false,
//     "language": "en",

//     "startUrls": [
//         {
//             "url": "https://www.tripadvisor.com/Restaurants-g297943-Hammamet_Nabeul_Governorate.html"
//         }
//     ]
// }

// const run = await client.actor("dbEyMBriog95Fv8CW").call(input);

// // Fetch and print Actor results from the run's dataset (if any)
// console.log('Results from dataset');
// const { items } = await client.dataset(run.defaultDatasetId).listItems();
// items.forEach((item) => {
//     console.dir(item);
// });
// console.log(items.toString);

// data cleaning with ai