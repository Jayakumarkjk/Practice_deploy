import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://jkpdesigns22:Jaydb@cluster0.uctkgot.mongodb.net/check?retryWrites=true&w=majority"
    );
    if (res) {
      console.log("connected succesfuly");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectToDb;