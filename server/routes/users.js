import express from 'express'
import {  login,admin } from '../controllers/auth.js'; 
import adminAuth from '../middlewares/adminAuth.js';
// import { getAllUsers, updateUserProfile } from '../controllers/users.js';

// import auth from '../middlewares/auth.js'

const routes = express.Router();

// routes.post("/signup", signup)
routes.post("/login", login)

routes.get("/admin",adminAuth, admin)
// routes.patch("/update/:id",updateUserProfile)

export default routes;