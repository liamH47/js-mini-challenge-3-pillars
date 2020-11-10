/**** DOM Elements ****/
const goalList = document.querySelector("#goals")


// Request:
// PATCH /players/1
// Headers: 
// { 
//   "Content-Type": "application/json"
// }
// Required Keys in Body:
// { 
//   likes: number
// }

// query selector - get the like button
const likeButton = document.querySelector(".like-button")
const likeTag = document.querySelector(".likes")
likeButton.addEventListener("click", e => {
  let likesNumber = parseInt(likeTag.innerText)
  likesNumber++
  likeTag.innerText = `${likesNumber} Likes`

  fetch("http://localhost:3000/players/1", {
    method: "PATCH",
    headers: { 
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      likes: likesNumber
    })
  })
  .then(r => r.json())
  .then(console.log)

})

/**** Fetches ****/
const getPlayer = () => {
  fetch("http://localhost:3000/players/1")
    .then(r => r.json())
    .then(renderPlayer)
}

/**** Render Helpers ****/ 
const renderGoal = goal => {
  const li = document.createElement("li")
  li.innerHTML = `
    <a href=${goal.link} target="_blank">${goal.link}</a>
  `
  goalList.append(li)
}

const renderPlayer = player => {
  const img = document.querySelector("img")
  img.src = player.photo
  img.alt = player.name

  const name = document.querySelector("h2")
  name.textContent = player.name

  const nickname = document.querySelector("em")
  nickname.textContent = player.nickname

  const likes = document.querySelector(".likes")
  likes.textContent = `${player.likes} Likes`

  goalList.innerHTML = ""
  player.goals.forEach(renderGoal)
}

/**** Initialize ****/ 
getPlayer()
