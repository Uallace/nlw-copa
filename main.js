function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}.svg">
        <Strong>${hour}</Strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}.svg">
    </li>
    `
}


let delay = -0.4;
function createCard(date, day, games){
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `

}

/* Adiciona o conteudo a tag main vua function com um seletor */
document.querySelector("#cards").innerHTML = 
    createCard("24/11","Quinta", createGame("brazil", "16:00", "serbia") + 
    createGame("uruguay","10:00","southkorea") + createGame("switzerland","07:00","cameroon") +
    createGame("portugal","13:00","ghana")) +
    createCard("28/11","Segunda", createGame("switzerland", "13:00", "brazil") +
    createGame("portugal","16:00", "uruguay") + createGame("ghana","10:00","southkorea") +
    createGame("cameroon","07:00","serbia")) +
    createCard("02/12","Sexta", createGame("brazil", "16:00", "cameroon") + 
    createGame("serbia","16:00","switzerland") + createGame("southkorea","12:00","portugal") + 
    createGame("ghana","12:00","uruguay"))
 
