let numeros = [1,2,4,7,10,25,22,40,28]

let calcularMedia = (numeros) =>{
    let media = 0

    for (let i = 0; i < numeros.length; i++){
        media += numeros[i]/numeros.length
    }
    
    return media
}

console.log(calcularMedia(numeros))