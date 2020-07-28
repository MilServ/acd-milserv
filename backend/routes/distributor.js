const express = require("express");
const router = express.Router();
const {
  create,
  list,
  lastList,
  // read,
  // remove,
  // update,
} = require("../controllers/distributor");
const { requireSignin, adminMiddleware } = require("../controllers/auth");

// This route is for Veterans to submit info form without login
router.post("/distributor", create);

// This route gets and displays list of Retailer submissions.
// Only Admins can see this Retailers list
router.get("/distributors", list, requireSignin, adminMiddleware);
router.get(
  "/distributors-last-submission",
  lastList,
  requireSignin,
  adminMiddleware
);

// This route selects individual Veteran file
// router.get("/veteran_file", read);

// router.delete("/veteran_file", requireSignin, adminMiddleware, remove);
// router.put("/veteran_file", requireSignin, adminMiddleware, update);

module.exports = router;
