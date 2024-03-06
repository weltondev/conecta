  const nome = document.querySelector('#nome');
  const matricula = document.querySelector('#matricula');
  const rg = document.querySelector('#rg');
  const cpf = document.querySelector('#cpf');
  const cadastrar = document.querySelector('#cadastrar');



  cadastrar.addEventListener('click', async (event)=>{
    event.preventDefault();
    if(!nome.value){
      return alert('Por favor preencha o campo nome!');
    }

    if(!rg.value || rg.value.length != 9){
      return alert('O campo RG deve ter 9 digitos');
    }
    if(!cpf.value || cpf.value.length != 11){
      return alert('O campo CPF deve 11 digitos');
    }
    if(!matricula.value || matricula.value.length > 6){
      return alert('O campo matricula deve ter entre 1 e 6 digitos');
    }

    try {
      const raw = {
        matricula: matricula.value,
        nome: nome.value,
        rg: rg.value,
        cpf: cpf.value,
      }
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(raw),
        redirect: 'follow',
        headers: {
          "Content-Type": "application/json"
        }
    };

    const resposta = await fetch(`https://conecta.cyclic.app/matriculas`, requestOptions)
    const conteudo = await resposta.json();

    if(conteudo == 'Usuário já cadastrado!'){
      alert(conteudo);
    }

    console.log(conteudo);
      
    } catch (error) {
      console.log(error);
    }
  });

