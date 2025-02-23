import { config } from "dotenv";
import server from "./src/app";
import connectDb from "./src/db";

config({ path: "./.env", debug: true });

const PORT = process.env.PORT || 5174;

/**
 * Connect to mongo db database.
 */
(async ()=>await connectDb())()

/**
 * start server
 */
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
