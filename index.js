const campoMatricula = document.querySelector('#matricula');
const data = document.querySelector('#datahora');
const oberservacao = document.querySelector('#observacao');
const matricula = document.querySelector('#matricula');
const acessarbtn = document.querySelector('#entrar');
const alerta = document.querySelector('#alerta');
const logo = document.querySelector('#logo');

matricula.addEventListener('keyup', ()=> {
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
    logo.src='./loading.gif'
    event.preventDefault();
    if(!matricula.value || !data.value){
      logo.src='./bird.svg'
      alert(`Matricula não encontrada no banco de dados. Por favor cadastra-se!`);
      window.location.reload();
      return
      return;
    }

    const raw = {
      matricula: matricula.value,
      data: data.value,
      oberservacao: oberservacao.value
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(raw),
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json"
      }
  };

  const resposta = await fetch(`https://conecta.cyclic.app/entradas`, requestOptions)
  const conteudo = await resposta.json();

  if(conteudo == 'Matrícula não cadastrada!'){
    logo.src='./bird.svg'
    alert(`Matricula não encontrada no banco de dados. Por favor cadastra-se!`);
    window.location.reload();
    return
  }

  if(conteudo == 'Matrícula cadastrada com sucesso!'){
    logo.src='./bird.svg';
    alert('Registro realizado com sucesso!');
    window.location.reload();
    return
  }
  


  } catch (error) {
    console.log(error);
  }
});
