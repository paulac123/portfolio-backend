const PerfilService = require("../service/perfil.service");

const perfilService = new PerfilService();

const getPerfil = async (req, res) => {
  try {
    const perfil = await perfilService.getPerfil();
    res.status(200).json(perfil);
  } catch (error) {
    next(error);
  }
};
module.exports = getPerfil;
