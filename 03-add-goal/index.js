/**** DOM Elements ****/
const goalList = document.querySelector("#goals")

/**** Fetches ****/
const getPlayer = () => {
  fetch("http://localhost:3000/players/1")
    .then(r => r.json())
    .then(renderPlayer)
}

/**** Render Helpers ****/ 
const renderGoal = goal => {
  const li = document.createElement("li")

  const a = document.createElement("a")
  a.href = goal.link
  a.target = "_blank"
  a.textContent = goal.link
  li.append(a)

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
