import express from "express";
import * as BranchController from "../controllers/branch.controller";

const router = express.Router();

/**
 * post - http://localhost:8096/branch/addBranch
 */

router.post('/addBranch', BranchController.addBranch);


/**
 * get All customer - http://localhost:8096/branch/branchList
 */
router.get('/branchList', BranchController.getBranch);

/**
 * Update - http://localhost:8096/branch/editBranch
 */
router.put('/editBranch', BranchController.updateBranch);

/**
 * Delect - http://localhost:8096/branch/${id}
 */
router.delete('/:id', BranchController.deleteBranch);

/**
 * Find count - http://localhost:8096/branch/count
 */
router.get('/count',BranchController.findCount)

export default router;