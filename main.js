function createGame(nomedojogo,site) {
  return `
  <li>
  <h1> ${nomedojogo} </h1>

  <a target="_blank" href="${site}" alt="página do jogo">
  
  </li>
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
          createGame("Jogo do avião") +
            createGame(""))}
        
          
          

        ${creatCard(
          "Gustavo Maciel",
          "8º ano",
          createGame("As aventuras de Odin") +
            createGame("")
        )}

        ${creatCard(
          "Hylber",
          "6º ano",
          createGame("As aventuras de João o Pão e Juninho o taco") +
            createGame("")
        )}
        ${creatCard(
          "Iasmin",
          "6º ano",
          createGame("Jogo do scratch") +
            createGame("")
        )}
        ${creatCard(
          "Isabelli",
          "7º ano",
          createGame("Jogo do Scratch") +
            createGame("")
        )}
        ${creatCard(
          "Kauanny",
          "6º ano",
          createGame("Jogo do Scratch") +
            createGame("")
        )}
        ${creatCard(
          "Roberto",
          "6º ano",
          createGame("Flap bird da Shopee") +
            createGame("")
        )}
        ${creatCard(
          "Gustavo Bueno",
          "9º ano",
          createGame("Jogo do scratch") +
            createGame("")
        )}
        ${creatCard(
          "Gabriel",
          "7º ano",
          createGame("Jogo do scratch") +
            createGame("")
        )}
        ${creatCard(
          "Maria Eduarda",
          "7º ano",
          createGame("Jogo do Scratch") +
            createGame("")
        )}
        ${creatCard(
          "Pedro",
          "7º ano",
          createGame("Jogo do scratch") +
            createGame("")
        )}
        ${creatCard(
          "Victor",
          "7º ano",
          createGame("Jogo do Scratch") +
            createGame("")
        )}
      </main>
`
