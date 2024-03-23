import { Express } from "express";


export const setupViewEngine = (app: Express): void => {

    app.set('view engine', 'ejs');
    app.set('views', 'src/main/presentation/');

}