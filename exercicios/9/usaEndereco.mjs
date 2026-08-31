import Endereco from './Endereco.mjs';

const end = new Endereco();

async function usaEndereco() {

    try {
        await end.setCep("72015565");

        const emptyMessage = "não informado";

        console.log("✅ Endereço carregado com sucesso:");
        console.log("CEP:", end.getCep() || emptyMessage);
        console.log("Logradouro:", end.getLogradouro()) || emptyMessage;
        console.log("Complemento:", end.getComplemento() || emptyMessage);
        console.log("Bairro:", end.getBairro() || emptyMessage);
        console.log("Cidade:", end.getCidade() || emptyMessage);
        console.log("UF:", end.getUf() || emptyMessage);
        console.log("Estado:", end.getEstado() || emptyMessage);
        console.log("Região:", end.getRegiao() || emptyMessage);
        console.log("DDD:", end.getDdd() || emptyMessage);

    } catch (erro) {
        console.error("❌ Erro ao definir CEP:", erro.message);
    }
}


console.log('\n========== Desafio Inicial + Extra 1 ==========');
await usaEndereco();

console.log('\n========== Desafio Extra 2 ==========');
console.log(`${await end.mostrarEnderecoCompleto()}\n`);
