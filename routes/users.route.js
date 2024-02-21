const express = require('express');
const { getAllusers, createUser, updateUser, deleteUser } = require('../controller/users.controller');
const router = express.Router();

router.get("/", getAllusers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);





module.exports = router;