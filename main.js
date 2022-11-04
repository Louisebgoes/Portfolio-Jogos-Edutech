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
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Kauanny",
          "6º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Roberto",
          "6º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Gustavo Bueno",
          "9º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Gabriel",
          "6º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Pedro",
          "6º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
        ${creatCard(
          "Victor",
          "6º ano",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
      </main>
`
