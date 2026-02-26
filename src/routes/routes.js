const express = require("express");
const getPerfil = require("../controller/perfil.controller");

const router = express.Router();

router.get("/perfil", getPerfil);

module.exports = router;
