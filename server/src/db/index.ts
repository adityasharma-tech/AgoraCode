import mongoose from "mongoose";

export default async function connectDb() {
  try {
      await mongoose.connect(process.env.MONGO_URI!);
  } catch (error: any) {
    console.error(
      `Some error during connecting to mongodb database: ${error.message}\n`,
      error
    );
    process.exit(1);
  }
}
