import mongoose from "mongoose";
import { logger } from "../lib/configs";

export default async function connectToMongoDb() {
  try {
      await mongoose.connect(`${process.env.MONGO_URI!}`, {
        retryWrites: true,
        w: "majority",
        appName: "Cluster0",
        dbName: "AgoraCode"
      });
  } catch (error: any) {
    logger.error(
      `Some error during connecting to mongodb database: ${error.message}`
    );
    process.exit(1);
  }
}
