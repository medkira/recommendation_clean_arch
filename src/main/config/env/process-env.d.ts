declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string;
            PORT: string;
            DB_HOST: string;
            JWT_SECRET: string;
            BCRYPTSALT: number;
            // add more environment variables and their types here
        }
    }
}

export { }