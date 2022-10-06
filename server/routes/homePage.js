import express from 'express'

import { postHomeData, deleteHomeData, getHomeData,editHomeData } from '../controllers/homePage.js'

import adminAuth from '../middlewares/adminAuth.js'

const router = express.Router()

router.post('/post',adminAuth, postHomeData)
router.get('/get', getHomeData)
router.delete('/delete/:id',adminAuth, deleteHomeData)
router.patch('/edit/:id',adminAuth, editHomeData)

export default router