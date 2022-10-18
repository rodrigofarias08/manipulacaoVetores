

let nomes = ['João', 'Maria', 'José']


for (const nome of nomes) {
  console.log(`Seu nome é ${nome}.`)
}


nomes.forEach((nome) => {
  console.log(`Seu nome é ${nome}.`)
}
)


let ingresso1 = {
  prop : 'Rodrigo',
  tipo : 'professor',
  lote : 1,
  assento : 102
}

console.log(ingresso1)

let ingressos = []

ingressos.push(ingresso1)
ingressos.push(ingresso1)

console.log(ingressos)



console.log(`O tipo do segundo ingresso vendido é ${ingressos[1].tipo}`)


//Desestruturação:
for (const ingresso of ingressos) {
  const { prop, assento } = ingresso

  console.log(`O participante ${prop} estará no assento ${assento}.`)


}

//desestruturando um vetor:

const [nome1, nome2, nome3] = nomes
console.log(`Os nomes são: ${nome1}, ${nome2}, ${nome3}.`)

console.log(nomes)


//Operador Rest (...) ---Resto
const [nome4, ... nomes2] = nomes



//Operador Stread (...) ---Espalhamento
let nomes3
nomes3 = [...nomes, "Maria"]

console.log(nomes3)





