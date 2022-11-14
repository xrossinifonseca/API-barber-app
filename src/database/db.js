import mongoose from "mongoose";

const connectDataBase = () => {
  console.log("Wait connecting to the database...");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb atlas conncted"))
    .catch((err) => console.log(err));
};

export default connectDataBase;
