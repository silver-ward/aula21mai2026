class Aluno {

    #matricula; // atributo privado
    #curso;     // atributo privado
    escola;     // atributo público

    setMatricula(matricula) {
        this.#matricula = matricula;
    }

    getMatricula() {
        return this.#matricula;
    }

    setCurso(curso) {
        this.#curso = curso;
    }

    getCurso() {
        return this.#curso;
    }

}

module.exports = Aluno;