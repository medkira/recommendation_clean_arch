declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string;
            PORT: string;
            DB_HOST: string;
            JWT_SECRET: string;
            BCRYPTSALT: number;

            CLOUDINARY_CLOUD_NAME: string;
            CLOUDINARY_API_KEY: string;
            CLOUDINARY_API_SECRET: string;

            SERVER_EMAIL: string;
            SERVER_EMAIL_PASS: string;


            GOOGLE_OAUTH_CLIENT_ID: string;
            GOOGLE_OAUTH_CLIENT_SECRET: string;
            GOOGLE_OAUTH_REDIRECT_URL: string;

            BASE_URL: string;
            CLIENT_BASE_URL: string;

            GOOGLE_AI: string;

            Apify_KEY: string;
        }
    }
}

export { }