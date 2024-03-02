import dbConnection from "@infra/db/mongodb/helpers/db-connection";
import { setupApp } from "./config/app";
import dotenv from 'dotenv';
import { PlaceRepository } from "@infra/db/mongodb/repositories/PlaceRepository";
dotenv.config({ path: 'src/main/config/env/.env' });

const databaseUrl = process.env.DB_HOST;
const port = process.env.PORT;
dbConnection.connect(databaseUrl!).then(() => {
    const app = setupApp();
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port} 🚀`);
    })
});


// const placeRepository = new PlaceRepository();

// // Specify desired page and limit
// const params = { page: 1, paginationLimit: 5 };


// (async () => {
//     try {
//         const response = await placeRepository.getLatestPlaces(params);

//         // Access paginated data
//         const places = response.data; // Array of Place entities
//         const currentPage = response.page;
//         const totalPlaces = response.total;
//         const totalPages = response.totalPages;

//         console.log(response);
//         // Utilize the retrieved data in your application logic
//     } catch (error) {
//         // Handle potential errors gracefully
//         console.error("Error fetching latest places:", error);
//     }

// })();