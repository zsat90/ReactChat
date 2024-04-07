const express = require("express");
const {
  createChat,
  findUserChats,
  findChat,
} = require("../controller/chatController");

const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findUserChats);
router.get("/find/:firstId/:secondId", findChat);

module.exports = router;
