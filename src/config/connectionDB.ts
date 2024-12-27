import mongoose from 'mongoose';

async function connectDB (url: string) {
  try {
    console.log("-----------------In connectDB file & connectDB method-------------");
    await mongoose.connect(url);
    console.log('-----------------MongoDB Connection Successfull-------------');
  } catch (err) {
    console.log("---------------In catch block of connectDB file & connectDB method-------------");
    console.log(`Connection to DataBase cannot establish\n${err}`);
    throw new Error(`Error in connecting to MongoDB - ${err}`);
  }
};

export default connectDB;
