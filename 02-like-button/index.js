/**** DOM Elements ****/
const goalList = document.querySelector("#goals")
const like = document.querySelector(".like-button")

like.addEventListener("click", e => {
  // get the current likes from the likes tag
  const likeNum = document.querySelector(".likes")
  let likesCount = parseInt(likeNum.textContent)
  likesCount += 1
  
  const data = { likes: likesCount };

  fetch("http://localhost:3000/players/1", {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  likeNum.innerHTML = `${likesCount} Likes`
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
