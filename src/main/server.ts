import dbConnection from "@infra/db/mongodb/helpers/db-connection";
import { setupApp } from "./config/app";
import dotenv from 'dotenv';
import { mapDocument, stringToObjectId } from "@infra/db/mongodb/helpers/mappers";
import placeModel from "@infra/db/mongodb/models/place.model";
import { UpdatePlaceRepository } from "@application/interfaces/repositories/place/UpdatePlaceRepository";
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
import { DataScrapingAdapter } from "@infra/utils/data-scraping/DataScrapingAdapter";
dotenv.config({ path: 'src/main/config/env/.env' });


const databaseUrl = process.env.DB_HOST;
const port = process.env.PORT;
dbConnection.connect(databaseUrl!).then(() => {
  const app = setupApp();
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} 🚀`);
  })
});


// (async () => {
//   const test = new DataScrapingAdapter()
//   const res = await test.DataScraping({ placeType: "park" })
//   console.log(res)
// })();