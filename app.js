const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const entrar = document.querySelector('#entrar');
const loading = document.querySelector('#loading');

entrar.addEventListener('click', async (e)=> {
  e.preventDefault();
  loading.style.display = 'block';
  try {
    // valida dados do formulário
    if(!email.value || !senha.value){
      const msg = document.querySelector('.msg');
      msg.innerHTML = `Por favor preencha todos os campos!`
      msg.style.display = 'block';
      loading.style.display = 'none';
      return;
    }

    const raw = {
      email: email.value,
      senha: senha.value
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(raw),
      headers: {
        "Content-Type": "application/json"
      }    
    }

    const resposta = await fetch(`https://lavender-pelican-slip.cyclic.app/login`, requestOptions);
    const conteudo = await resposta.json()
    loading.style.display = 'none';

    console.log(conteudo);

  } catch (error) {
    console.log(error)
  }
})