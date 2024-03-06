const campoMatricula = document.querySelector('#matricula');
const data = document.querySelector('#datahora');
const oberservacao = document.querySelector('#observacao');
const matricula = document.querySelector('#matricula');
const acessarbtn = document.querySelector('#entrar');

matricula.addEventListener('keyup', (e)=>{
  if(campoMatricula.value.length > 6){
    document.querySelector('.msg').style.display = 'block'
    console.log('Matricula deve ter apenas 6 numeros');
    matriculaNumeros = matricula.value;
    matriculaCorreta = matriculaNumeros.split('').slice(0, 6)
    matricula.value = +matriculaCorreta.join('')
  }
});



acessarbtn.addEventListener('click', async (event)=> {
  try {
    event.preventDefault();
    raw = {
      matricula: matricula.value,
      data: data.value,
      oberservacao: oberservacao.value
    }
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
      redirect: 'follow'
  };

  const resposta = await fetch(`https://conecta.cyclic.app/entradas`, requestOptions)
  const conteudo = await resposta.json();
  console.log(conteudo)
  } catch (error) {
    console.log(error);
  }
});
