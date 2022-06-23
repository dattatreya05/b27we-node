import {client} from "./index.js"

async function createMovies(newMovies) {
    return await client
      .db("b27we")
      .collection("movies")
      .insertMany(newMovies);
  }
  
  async function updateMovieById(id, updateData) {
    return await client
      .db("b27we")
      .collection("movies")
      .updateOne({ id: id }, { $set: updateData });
  }
  
  async function deleteMovieById(id) {
    return await client
      .db("b27we")
      .collection("movies")
      .deleteOne({ id: id });
  }
  
  async function getMovieById(id) {
    return await client
      .db("b27we")
      .collection("movies")
      .findOne({ id: id });
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
    getAllMovies
};