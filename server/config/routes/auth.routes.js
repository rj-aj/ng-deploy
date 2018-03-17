const router = require("express").Router();
const authController = require("./../../controllers/auth");

module.exports = router
    .post("/api/auth/login", authController.login)
    .post("/api/auth/register", authController.register)
    .delete("/api/auth/logout", authController.logout);