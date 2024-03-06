  // const nome = document.querySelector('#nome');
  // const rg = document.querySelector('#rg');
  // const cpf = document.querySelector('#cpf');
  const matricula = document.querySelector('#matricula');
  const apagar = document.querySelector('#apagar');

  const parametros = new URLSearchParams(window.location.search);
  const id = parametros.get('id')
  const matriculaURL = parametros.get('matricula')
  console.log(matriculaURL)

  apagar.addEventListener('click', async (event)=>{
    try {
      event.preventDefault();
      

        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: {
            "Content-Type": "application/json"
          }
      };
      const resposta = await fetch(`https://conecta.cyclic.app/matriculas/${id}`, requestOptions);
      const conteudo = await resposta.json();

      console.log(conteudo)

    } catch (error) {
      console.log(error);
    }
  })


