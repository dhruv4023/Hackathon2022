import express from 'express'
import {  login,admin } from '../controllers/auth.js'; 
import adminAuth from '../middlewares/adminAuth.js';

const routes = express.Router();

routes.post("/login", login)

routes.get("/admin",adminAuth, admin)

export default routes;