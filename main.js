function openInNewTab(site) {
  window.open(site, '_blank').focus();
}

function createGame(nomedojogo, site) {  
  return `
  <button style="height:50px;width:200px;align-itens:center;color:blue;text-transform:uppercase" onclick="openInNewTab('${site}');"> ${nomedojogo}</button>  
  `
}

function creatCard(date, day, games) {
  return `
  <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
            </ul>
            </div>
         
  `
}

document.querySelector("#app").innerHTML = `

      <main id="cards">
        ${creatCard(
          "Bruna",
          "6º ano",
          createGame("Calculadora de Suspiro","https://scratch.mit.edu/projects/700642787"))}
        
        ${creatCard(
          "Gustavo Maciel",
          "8º ano",
          createGame("As aventuras de Odin","https://scratch.mit.edu/projects/715456382"))}

        ${creatCard(
          "Hylber",
          "6º ano",
          createGame("As aventuras de João o Pão e Juninho o taco","https://scratch.mit.edu/projects/709518970"))}

        ${creatCard(
          "Iasmin",
          "6º ano",
          createGame("Desafio nas alturas","https://scratch.mit.edu/projects/730885451"))}

        ${creatCard(
          "Isabelli",
          "7º ano",
          createGame("Jogo do Scratch"))}

        ${creatCard(
          "Kauanny",
          "6º ano",
          createGame("Jogo do Scratch"))}

        ${creatCard(
          "Roberto",
          "6º ano",
          createGame("Flap bird da Shopee"))}

        ${creatCard(
          "Gustavo Bueno",
          "9º ano",
          createGame("Monster Trash Battle","https://scratch.mit.edu/projects/709514538"))}

        ${creatCard(
          "Gabriel",
          "7º ano",
          createGame("Corrida científica","https://scratch.mit.edu/projects/723148726"))}

        ${creatCard(
          "Maria Eduarda",
          "7º ano",
          createGame("Jogo do Scratch"))}

        ${creatCard(
          "Pedro",
          "7º ano",
          createGame("Jogo do scratch"))}

        ${creatCard(
          "Victor",
          "7º ano",
          createGame("Jogo do Scratch"))}

      </main>
`
