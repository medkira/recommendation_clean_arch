import { ImageToJson } from "@application/interfaces/utils/OCR-GOOGLE/ImageToJson";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class OCRAdapter implements ImageToJson {

    async imageToJson(imageBuffer: Buffer): Promise<any> {
        const generativeModel = new GoogleGenerativeAI(process.env.GOOGLE_AI);

        async function generateText(promptText: string, images: any[]) {
            const model = generativeModel.getGenerativeModel({ model: 'gemini-pro-vision' })
            try {
                // const imageData = Buffer.from(imageBuffer).toString('base64');
                const result = await model.generateContent([promptText, ...images]);
                const response = result.response;
                const text = response.text();
                // console.log(text);
                return text;

            } catch (error) {
                console.error(error);
            }


        }
        function fileToGenerativePart(path: any, mimeType: string) {
            return {
                inlineData: {
                    data: (path[0].buffer).toString("base64"),
                    mimeType
                },
            };
        }



        const Prompt = "give me json {name: sting, price: number , food_type: string} data in english for this menu, just response with array with json NOTHING ALSE"
        const images = [
            fileToGenerativePart(imageBuffer, "image/png")
        ]

        const text = await generateText(Prompt, images);
        const jsonObject = await JSON.parse(text!)
        return jsonObject;
    }

}