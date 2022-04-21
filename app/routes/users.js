import express from 'express';
import { appendFile } from 'fs';

import { getUser, createUser, getUsers, deleteUser, updateUser, getUserOrder, getUserCart, getUserTabOrder } from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers) 

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

router.get('/order/:id', getUserOrder)

router.get('/cart/:id', getUserCart)

router.get('/taborder/:id', getUserTabOrder)

// router.patch('/urating/:id', pkg.UpdateUserRating)

// router.patch('/cart/:id', pkg.updateUserCart)

// router.patch('/taborder/:id', pkg.updateUserTabOrder)

export default router
