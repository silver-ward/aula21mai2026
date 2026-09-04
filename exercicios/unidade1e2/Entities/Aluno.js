const PF = require('./PF');

class Aluno extends PF {

  #matricula;
  #curso;

  setMatricula(matricula) {
      if ((matricula.length === 8) &&
          (matricula.startsWith("20"))) {
        this.#matricula = matricula;
        return true;
      }
      return false;
  }

  getMatricula() {
    return this.#matricula;
  }

  setCurso(curso) {
    const cursos = ['ADS', 'SI', 'ES'];

    if (cursos.includes(curso)) {
      this.#curso = curso;
      return true;
    }
    return false;
  }

  getCurso() {
    return this.#curso;
  }

}

module.exports = Aluno;