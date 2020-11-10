/**** DOM Elements ****/
const goalList = document.querySelector("#goals")
const likeButton = document.querySelector(".like-button")

likeButton.addEventListener("click", handleLikes)

function handleLikes(event) {
  // make it update the p with likes
  const likesElement = document.querySelector(".likes")
  
  const likes = parseInt(likesElement.innerHTML)

  // make a patch request
  fetch("http://localhost:3000/players/1", {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      likes: likes + 1
    }),
  })
  .then(r => r.json())
  .then(player => {
    likesElement.innerHTML = `${player.likes} Likes`
  })
}

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
