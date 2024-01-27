import express from "express";
import * as UserController from "../controllers/user.controller";

const router = express.Router();


/**
 * get All users -http://localhost:8096/user/all
 */
router.get('/all', UserController.getAllUser)

/**
 * Create new user - http://localhost:8096/user
 */
router.post('/', UserController.createNewUser)

/**
 * Update Details - http://localhost:8096/user/updateDetails
 */
router.put('/updateDetails', UserController.updateUser)

/**
 * Auth - http://localhost:8096/user/auth
 */
router.post('/auth', UserController.authUser)

export default router;