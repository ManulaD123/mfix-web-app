"use server";
import { db } from "@/lib/mongodb";

//-----------------------------=Movies related server actions------------------------------

// Insert Movie Server Action

export const createMovie = async (movie) => {
  try {
    // Create movie query
    const result = await db.collection("movies-n").insertOne(movie);
    console.log(`A movie was inserted with the _id: ${result.insertedId}`);
    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongodb insert failed!", error);
    return { success: false, error };
  }
};
