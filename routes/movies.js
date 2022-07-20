import express from "express";
import {createMovies, 
    updateMovieById, 
    deleteMovieById, 
    getMovieById, 
    getAllMovies} from "../helper.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Curosor -> pagination
router.get("/", async function (request, response) {
    //db.movies.find({})
    const movies = await getAllMovies(); // converts cursor to array
    response.send(movies);
  });
  
  // :id we are passing to get only that movie details
router.get("/:id", async function (request, response) {
    console.log("request.params", request.params);
    const { id } = request.params;
    //db.movies.findOne({id: "104"})
    const movie = await getMovieById(id);
    console.log(movie);
    // const movie = movies.find((mv) => mv.id === id);
    movie
      ? response.send(movie)
      : response.status(404).send({ message: "No such movie found 😊" });
  });
  
router.delete("/:id", async function (request, response) {
    console.log("request.params", request.params);
    const { id } = request.params;
    //db.movies.deleteOne({id: "102"})
    const result = await deleteMovieById(id);
    console.log(result);
    response.send(result);
  });
  
router.put("/:id", async function (request, response) {
    console.log("request.params", request.params);
    const { id } = request.params;
    const updateData = request.body;
    //db.movies.updateOne({id: "104"}, {$set: updateData})
    const result = await updateMovieById(id, updateData);
    console.log(result);
    response.send(result);
  });
  
router.post("/", async function (request, response) {
    const newMovies = request.body;
    console.log(newMovies);
    // db.movies.insertMany(data)
    const result = await createMovies(newMovies);
    response.send(result);
  });

export const moviesRouter = router;