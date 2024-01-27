import express from "express";
import * as OrderController from "../controllers/order.controller";

const router = express.Router();

/**
 * post - http://localhost:8096/order/addOrder
 */

router.post('/addOrder', OrderController.addOrder);


/**
 * get All customer - http://localhost:8096/order/orderList
 */
router.get('/orderList', OrderController.getOrder);

/**
 * Update - http://localhost:8096/order/editOrder
 */
router.put('/editOrder', OrderController.updateOrder);

/**
 * Delect - http://localhost:8096/order/${id}
 */
router.delete('/:id', OrderController.deleteOrder);


/**
 * Send the mail - http://localhost:8096/order/send-email
 */
router.post('/send-email',OrderController.sendEmail);

/**
 * Find count - http://localhost:8096/order/count
 */
router.get('/count',OrderController.findCount)



export default router;