import dbConnection from "@infra/db/mongodb/helpers/db-connection";
import { setupApp } from "./config/app";
import dotenv from 'dotenv';
dotenv.config({ path: 'src/main/config/env/.env' });

const databaseUrl = process.env.DB_HOST;
const port = process.env.PORT;
dbConnection.connect(databaseUrl!).then(() => {
    const app = setupApp();
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port} 🚀`);
    })
})