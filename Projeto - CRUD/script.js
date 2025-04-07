let enviar = document.getElementById("enviar")

let pessoas = []

enviar.addEventListener("click", ()=>{
    
    let selNome = document.getElementById("pessoa")
    let selIdade = document.getElementById("idade") 
    let selSexo = document.getElementById("sexo")

    pessoas.push({nome: String(selNome.value), idade: Number(selIdade.value), sexo: String(selSexo.value)})

    selNome.value = ""
    selIdade.value = ""
    selSexo.value = ""
})

let remover = document.getElementById("remove")

remover.addEventListener("click", ()=>{

    let selIndex = document.getElementById("index")

    pessoas.splice(Number(selIndex.value), 1)

    selIndex.value = ""
})

let mostrar = document.getElementById("mostrar")

mostrar.addEventListener("click", ()=>{

    let selIndex = document.getElementById("indexMostrado")

    let nomeMostrado = document.getElementById("nomeMostrado")
    let idadeMostrada = document.getElementById("idadeMostrada")
    let sexoMostrado = document.getElementById("sexoMostrado")

    nomeMostrado.innerHTML = pessoas[Number(selIndex.value)].nome
    idadeMostrada.innerHTML = pessoas[Number(selIndex.value)].idade
    sexoMostrado.innerHTML = pessoas[Number(selIndex.value)].sexo

    selIndex.value = ""
})

let mostrarPeloNome = document.getElementById("mostrarPeloNome")

mostrarPeloNome.addEventListener("click", ()=>{
    let selNome = document.getElementById("nomePesquisa")   

    let resultado = document.getElementById("resultado")

    let contador = 0

    pessoas.forEach(function(pessoa, index){
        if (pessoa.nome == selNome.value){
            resultado.innerHTML = "O valor do index é " + index
            contador++
        }
    }) 
    
    //Não finalizado

    if (contador > 1){
        let vetorMesmoNome = pessoas.filter((selNome.value))

        resultado.innerHTML = "Os valores dos índex são: "

        vetorMesmoNome.forEach(function(pessoa, index){
            resultado.innerHTML += index + " "
        })
    }

    selNome.value = ""
})

