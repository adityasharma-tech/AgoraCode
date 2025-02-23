import server from "./src/app";
import { config } from "dotenv";
import connectDb from "./src/db";
import { logger } from "./src/lib/configs";

config({ path: "./.env", debug: true });

const PORT = process.env.PORT || 5174;

/**
 * Connect to mongo db database.
 */
(async ()=>await connectDb())();

/**
 * start server
 */
server.listen(PORT, () => {
  logger.info(`Server is running on port http://localhost:${PORT}`);
});
