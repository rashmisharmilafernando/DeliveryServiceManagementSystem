import express from "express";
import * as CustomerController from "../controllers/customer.controller";

const router = express.Router();

/**
 * post - http://localhost:8096/customer/addCustomer
 */

router.post('/addCustomer', CustomerController.addCustomer);


/**
 * get All customer - http://localhost:8096/customer/customersList
 */
router.get('/customersList', CustomerController.getCustomer);

/**
 * Update - http://localhost:8096/customer/editCustomer
 */
router.put('/editCustomer', CustomerController.updateCustomer);

/**
 * Delect - http://localhost:8096/customer/${id}
 */
router.delete('/:id', CustomerController.deleteCustomer);


/**
 * Send the mail - http://localhost:8096/customer/send-email
 */
router.post('/send-email',CustomerController.sendEmail);

/**
 * Find count - http://localhost:8096/customer/count
 */
router.get('/count',CustomerController.findCount)

export default router;