import express from "express";
import * as RiderController from "../controllers/rider.controller";

const router = express.Router();

/**
 * post - http://localhost:8096/rider/addRider
 */

router.post('/addRider', RiderController.addRider);


/**
 * get All rider - http://localhost:8096/rider/riderList
 */
router.get('/riderList', RiderController.getRider);

/**
 * Update - http://localhost:8096/rider/editRider
 */
router.put('/editRider', RiderController.updateRider);

/**
 * Delect - http://localhost:8096/rider/${id}
 */
router.delete('/:id', RiderController.deleteRider);

/**
 * Find count - http://localhost:8096/rider/count
 */
router.get('/count',RiderController.findCount)

export default router;