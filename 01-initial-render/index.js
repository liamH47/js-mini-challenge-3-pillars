document.addEventListener("DOMContentLoaded", event => {
    console.log("dom loaded")
    getFirstPlayer()
})

//dom elements
const playerPic = document.querySelector("img")
const playerName = document.querySelector("h2")
const playerNickName = document.querySelector("em")
const playerLikes = document.querySelector(".likes")

//renders
const renderPlayer = playerObj => {
    playerPic.src = playerObj.photo
    playerName.textContent = playerObj.name 
    playerNickName.textContent = playerObj.nickname 
    playerLikes.textContent = playerObj.likes
}

//fetches

const getFirstPlayer = () => {
    fetch('http://localhost:3000/players/1')
    .then(r => r.json())
    .then(playerObj => renderPlayer(playerObj)) 
}