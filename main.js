function openInNewTab(site) {
  window.open(site, "_blank").focus();
}

function createGame(nomedojogo, site) {
  return `
  <button
    style="
      height: 50px;
      width: 200px;
      color: white;
      text-transform: uppercase;
      background-color: hsl(246, 92%, 62%);
    "
    onclick="openInNewTab('${site}');" > ${nomedojogo}
  </button>
  `;
}

function creatCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span> <br> ${day} </span></h2>
    <ul>
      ${games}
    </ul>
  </div>
         
  `;
}

document.querySelector("#app").innerHTML = `
  <main id="cards">
    ${creatCard("Bruna","6º ano", createGame("Calculadora de Suspiro","https://scratch.mit.edu/projects/700642787"))}
    ${creatCard("Davi", "6º ano", createGame("Calculadora de Suspiro", "https://scratch.mit.edu/projects/691200372"))}
    ${creatCard("Diogo", "7º ano", createGame("Calculadora de Suspiro", "https://scratch.mit.edu/projects/698544222"))}
    ${creatCard("Gabriel HENRIQUE","7º ano",createGame("Corrida científica","https://scratch.mit.edu/projects/723148726"))}
    ${creatCard("Gustavo Bueno","9º ano",createGame("Monster Trash Battle","https://scratch.mit.edu/projects/709514538"))}
    ${creatCard("Gustavo Maciel","8º ano",createGame("As aventuras de Odin","https://scratch.mit.edu/projects/715456382"))}
    ${creatCard("Hylber","6º ano", createGame("As aventuras de João o Pão e Juninho o taco","https://scratch.mit.edu/projects/709518970"))}
    ${creatCard("Iasmin","6º ano",createGame("Desafio nas alturas","https://scratch.mit.edu/projects/730885451"))}
    ${creatCard("Kauanny", "6º ano", createGame("MIA","https://scratch.mit.edu/projects/721973410"))}
    ${creatCard("Pedro T.", "7º ano", createGame("Calculadora Legal","https://scratch.mit.edu/projects/709508166"))}
    ${creatCard("Pedro L.", "7º ano", createGame("Movimento Browniano", "https://scratch.mit.edu/projects/709509100"))}
    ${creatCard("Roberto", "6º ano", createGame("Salve o Calvo","https://scratch.mit.edu/projects/727495546"))}
    ${creatCard("Victor ", "7º ano", createGame("Jogo do avião","https://scratch.mit.edu/projects/730879433"))}
  </main>
`;
