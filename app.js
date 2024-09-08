function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string para armazenar o HTML dos resultados
  let resultados = "";
  
  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let tags = dado.tags.toLocaleLowerCase()

    // Verifica se o título ou descrição contém o campo de pesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)
    || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
      `;
    }
  }

  if (!resultados) {
      resultados = "<p>Nada foi encontrado. Digite o nome de um atleta ou esporte</p>"
  }

  // Atualiza o conteúdo da seção com os resultados gerados
  section.innerHTML = resultados;
}