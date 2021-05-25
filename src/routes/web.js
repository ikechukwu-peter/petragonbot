const express = require("express");
const chatbotController = require("../controllers/chatbotController");

const router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", chatbotController.test);
  router.get("/webhook", chatbotController.getWebhook);
  router.post("/webhook", chatbotController.postWebhook);

  return app.use("/", router);
};

module.exports = initWebRoutes;
