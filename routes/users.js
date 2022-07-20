import express from "express";
import {createMovies, 
    updateMovieById, 
    deleteMovieById, 
    getMovieById, 
    getAllMovies,
    createUser,
    getUserByName} from "../helper.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// For getting the hased password using bcrypt by giving salt value
async function genPassword(password){
  const salt = await bcrypt.genSalt(10) // bcrypt.genSalt(no.Of rounds)
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(salt, hashedPassword);
  return hashedPassword;
}

// Curosor -> pagination
router.post("/signup", async function (request, response) {
    const { username, password } = request.body;
    // db.users.insertOne(newUser)
    const hashedPassword = await genPassword(password);
    const newUser = {
      username: username,
      password: hashedPassword,
    }
    const result = await createUser(newUser);
    response.send(result);
  });

router.post("/login", async function (request, response) {
    const { username, password } = request.body;
    // db.users.findOne({username:"Dattatreya"})
    const userFromDB = await getUserByName(username);
    console.log(userFromDB);
    
    if(!userFromDB){
      response.status(401).send({message: "Invalid credentials"});
    }
    else{
      const storePassword = userFromDB.password;
      const isPasswordMatch = await bcrypt.compare(password, storePassword);
      if(isPasswordMatch){
        const token = jwt.sign({id: userFromDB._id}, process.env.SECRET_KEY);
        response.send({message: "Successfull login", token: token});
      } else {
        response.status(401).send({message: "Invalid credentials"});
      }
    }
        
  });

export const usersRouter = router;