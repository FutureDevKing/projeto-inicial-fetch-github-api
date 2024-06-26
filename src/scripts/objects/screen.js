const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/> 
                                            <div class="data">
                                                <h1>${user.name ?? 'não possui nome cadastrado😥'}</h1>
                                                <p>${user.bio ?? 'não possui bio ☹️'}</p>
                                            </div>
                                      </div>`
        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems += `<li><a href = "${repo.html_url}" target = "_blank">${repo.name}</a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML +=   `<div class = "repositories section">
                                                <h2>Repositories</h2>
                                                <ul>${repositoriesItems}</ul>
                                            </div>` 
        }
    }
}

export { screen }