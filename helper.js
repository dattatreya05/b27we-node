import {client} from "./index.js"
import {ObjectId} from "mongodb"

async function createMovies(newMovies) {
    return await client
      .db("b27we")
      .collection("movies")
      .insertMany(newMovies);
  }

async function createUser(newUser) {
    return await client
      .db("b27we")
      .collection("users")
      .insertOne(newUser);
  }

async function updateMovieById(id, updateData) {
    return await client
      .db("b27we")
      .collection("movies")
      .updateOne({ _id: ObjectId(id) }, { $set: updateData });
  }
  
async function deleteMovieById(id) {
    return await client
      .db("b27we")
      .collection("movies")
      .deleteOne({ _id: ObjectId(id) });
  }
  
async function getMovieById(id) {
    return await client
      .db("b27we")
      .collection("movies")
      .findOne({ _id: ObjectId(id) });
  }

async function getUserByName(username) {
    return await client
      .db("b27we")
      .collection("users")
      .findOne({ username : username });
  }
  
async function getAllMovies() {
    return await client
      .db("b27we")
      .collection("movies")
      .find({})
      .toArray();
  }

export {
    createMovies, 
    updateMovieById, 
    deleteMovieById, 
    getMovieById, 
    getAllMovies,
    createUser,
    getUserByName
};