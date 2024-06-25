document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
   const userName = e.target.value
   const key = e.which || e.keyCode
   const isEnterPressed = key === 13

   if(isEnterPressed){
    getUserProfile(userName)
   }
})

async function user(userName){
    const response = await fetch(`http://api.github.com/users/${userName}`)
    return await response.json()
} 

function getUserProfile(userName){
    user(userName).then(userData => {
        console.log(userData)
        //avatar_url
        //bio
        //name

        let userInfo = `<img src="${userData.avatar_url}" alt="foto do perfil do usuário"/> 
                        <div class="data">
                            <h1>${userData.name ?? 'não possui nome cadastrado😥'}</h1>
                            <p>${userData.bio ?? 'não possui bio ☹️'}</p>
                        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo
    })  
}