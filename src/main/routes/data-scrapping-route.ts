import { expressRouterAdapter } from "@main/adpaters/express-router-adapter";
import { makeDataScrapingController } from "@main/factories/controllers/dataScraping/data-scraping/controller-factory";
import { Router } from "express";

export default (router: Router): void => {
    router.post('/dataScraping', expressRouterAdapter(makeDataScrapingController()))

}