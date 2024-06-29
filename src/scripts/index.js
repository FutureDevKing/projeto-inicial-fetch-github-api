import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js"

import { user } from "../scripts/objects/user.js"
import { screen } from "../scripts/objects/screen.js"
import { getUserEvents } from '../scripts/objects/events.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptInput(userName)) return
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterPressed = key === 13

    if (isEnterPressed) {
        validateEmptInput(userName)
        getUserData(userName)
    }
})

function validateEmptInput(userName){
    if(userName.length === 0){
        alert("preencha o campo com o nome de usuário do GitHub")
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)

    const eventsListed = await getUserEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsListed)
    screen.renderUser(user)
    
    console.log(userResponse);
}


