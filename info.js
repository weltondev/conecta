const nome = document.querySelector('#nome');
const matricula = document.querySelector('#matricula');
const rg = document.querySelector('#rg');
const cpf = document.querySelector('#cpf');

// PEGANDO OS PARAMETROS VIA URL
const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id')

const informacoes = async () => {
try {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
const resposta = await fetch(`https://conecta.cyclic.app/matriculas/${id}`, requestOptions);
const conteudo = await resposta.json();

console.log(conteudo)

nome.value = conteudo.infos.nome;
matricula.value = conteudo.infos.matricula;
rg.value = conteudo.infos.rg;
cpf.value = conteudo.infos.cpf;

} catch (error) {
  console.log(error)
}
}

informacoes();