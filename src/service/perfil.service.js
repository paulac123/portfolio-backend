const perfil = require("./../data/perfil");

class PerfilService {
  constructor() {}

  getPerfil() {
    try {
      return perfil;
    } catch (error) {
      throw new Error("Error al obtener el perfil: " + error.message);
    }
  }
}
module.exports = PerfilService;
