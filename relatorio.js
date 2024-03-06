
const relatorios = async()=>{
  try {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  const resposta = await fetch(`https://conecta.cyclic.app/entradas`, requestOptions)
  const conteudo = await resposta.json();
  console.log(conteudo)


  conteudo.entradas.reverse().forEach((entrada)=>{
    const dataFormatada = new Date(entrada.data);
    const dataCorreta = dataFormatada.toLocaleDateString('pt-BR', {timeZone: 'UTC',weekday:'long', year: 'numeric', month:'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'});
    const tabela = document.querySelector('#tabela');
    const tr = document.createElement('tr');
    tr.innerHTML = `

    <td>${entrada.matricula}</td>
    <td>${dataCorreta}</td>
    <td>${entrada.observacao}</td>
    <td>
        <a href="" class="btn btn-primary"><i class="bi bi-file-earmark-arrow-down"></i></a>
        <a href="" class="btn btn-secondary"><i class="bi bi-pencil"></i></a>
        <a href="" class="btn btn-danger"><i class="bi bi-trash"></i></a>
        <a href="info.html?id=${entrada._id}" class="btn btn-light"><i class="bi bi-three-dots-vertical"></i></a>
    </td>
    `
    tabela.appendChild(tr)

    document.querySelector('#loading').style.display = 'none';
  })
  } catch (error) {
    console.log(error);
  }
}
relatorios();