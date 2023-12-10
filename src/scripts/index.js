function handleNav(){
    const listIntro = document.querySelector('#list_intro')
    const listGrupo = document.querySelector('#list_grupo')
    const listProjeto = document.querySelector('#list_projeto')

    listIntro.addEventListener('click', () => {
        window.location.replace('#intro')
    })

    listGrupo.addEventListener('click', () => {
        window.location.replace('#grupo')
    })

    listProjeto.addEventListener('click', () => {
        window.location.replace('#projeto')
    })
}
handleNav()
