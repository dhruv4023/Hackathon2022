import express from 'express'

import { postService, deleteService, getService,editService } from '../controllers/Service.js'

import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/post', postService)
router.get('/get', getService)
router.delete('/delete/:id', deleteService)
router.patch('/edit/:id', editService)

export default router