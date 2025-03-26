fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(function(response){
    return response.json()
})
.then(function(data){
    const body = document.querySelector("body")

    let imagem = window.document.createElement("img")

    imagem.setAttribute("src", data.sprites.back_default)
    //    imagem.src = data.sprites.back_default - OUTRA FORMA DE FAZER ISSO

    body.appendChild(imagem)

    let nome = document.createElement("h2")

    nome.innerHTML = data.name

    body.appendChild(nome)
    
})
.catch(function(error){
    console.error("Encontrei o erro", error)
})

