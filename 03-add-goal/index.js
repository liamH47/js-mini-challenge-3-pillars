/**** DOM Elements ****/
const goalList = document.querySelector("#goals")



// Deliverable 3
const goalForm = document.querySelector("#new-goal-form")
goalForm.addEventListener("submit", event => {
  event.preventDefault()
  // get the information from the textbox
  const goalFormValue = goalForm.querySelector("textarea").value
  const goalObject = {
    playerId: 1,
    link: goalFormValue
  }

  // save it to the database
  addGoal(goalObject)

  // add another li under the goal videos based on the text that was input

})


/**** Fetches ****/
const addGoal = (goalObject) => {
  fetch("http://localhost:3000/goals", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalObject)
  })
}

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
