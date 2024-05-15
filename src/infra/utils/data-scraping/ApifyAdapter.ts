import { GoogleGenerativeAI } from '@google/generative-ai';
import { ApifyClient } from 'apify-client';
export class ApifyAdapter {



    async DataScraping(tripAdvisorUrls: string[] = [""]) {
        // Initialize the ApifyClient with API token
        const client = new ApifyClient({
            token: process.env.Apify_KEY
        });

        // Prepare Actor input
        const input = {
            "currency": "TND",
            "includeAiReviewsSummary": false,
            "includeAttractions": false,
            "includeHotels": true,
            "includePriceOffers": false,
            "includeRestaurants": true,
            "includeTags": false,
            "includeVacationRentals": false,
            "language": "en",
            "locationFullName": "Tunisia",
            "maxItemsPerQuery": 10,
            "startUrls": [
                {
                    "url": "https://www.tripadvisor.com/Restaurants-g297943-Hammamet_Nabeul_Governorate.html"
                }
            ]
        }

        const run = await client.actor("dbEyMBriog95Fv8CW").call(input);

        // Fetch and print Actor results from the run's dataset (if any)
        console.log('Results from dataset');
        const { items } = await client.dataset(run.defaultDatasetId).listItems();
        items.forEach((item) => {
            console.dir(item);
        });
        console.log(items.toString)

        // data cleaning with ai
        // const generativeModel = new GoogleGenerativeAI(process.env.GOOGLE_AI);
        // async function generateText(promptText: string) {
        //     const model = generativeModel.getGenerativeModel({ model: 'gemini-pro' })
        //     try {
        //         // const imageData = Buffer.from(imageBuffer).toString('base64');
        //         const result = await model.generateContent([promptText]);
        //         const response = result.response;
        //         const text = response.text();
        //         // console.log(text);
        //         return text;

        //     } catch (error) {
        //         console.error(error);
        //     }


    }
    // const Prompt = ' provide me 10 restaurants in tunisie fromtripadvisor / monastir / sousse / mahdia make the provided data in array json struncture like this(just response with array nothing ALSE) ' +
    //     ` 
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

    //   }`

    // const Prompt = "Please provide a response in a structured JSON format that matches the following model {name: sting, type: placeTypes ,   location: string, placeImage?: sting, tripadvisorUrl :string} data  for restaurants in  TUNISIA(monastir,sousse, mahdia) from tripadvisor , important: make sure the tripadvisor ulr is valid and correct,  response with array  json NOTHING ALSE." +
    //     "IMPORTANT: The output should be a JSON array , Make Sure the JSON is valid, dont enclude ```json"
    // const Prompt = "recommend me restaurant in tunisie with tripadvisor url"
    // const text = await generateText(Prompt);
    //     console.log(text)
    //     console.log(JSON.parse(text!));
    // }




}