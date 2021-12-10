import mongoose from "mongoose";

const Connection = async (URL) => {
  try {
    
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connection successful");
  } catch (err) {
    console.log("Error while cnnecting to mongoose", err);
  }
};

export default Connection;
