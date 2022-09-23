import express from 'express'

import { postdoubt, deletedoubt, getdoubt,editdoubt } from '../controllers/doubt.js'

import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/post', postdoubt)
router.get('/get', getdoubt)
router.delete('/delete/:id', deletedoubt)
router.patch('/edit/:id', editdoubt)

export default router