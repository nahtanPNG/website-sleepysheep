var botao = document.getElementById('botao')


function verificar(){
    const tema = localStorage.theme || 'light' //pegando o que está armazenado
    if(tema === 'dark') // código que deixa como tema dark
    darkmode() //chamando a função darkmode
}
verificar()

function darkmode(){
    var corpo = document.body
    corpo.classList.toggle("darkmode") //ativando o darkmode do CSS

    if (corpo.classList.contains("darkmode")){ //Verificando se o corpo contem o darkmode ativo
        localStorage.theme = 'dark' //Local Storage guarda um dado
        botao.setAttribute('value', 'Lightmode') //Mudando valor do botão
    } else {
        localStorage.theme = 'light'
        botao.setAttribute('value', 'Darkmode')
    }
    
}



