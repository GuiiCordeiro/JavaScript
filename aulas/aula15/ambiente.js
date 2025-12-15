var num = [5, 2, 8, 6, 9]
/*num.push(3)
num.sort() 
console.log(`${num}`)
console.log(`O número na posição 2 é ${num[2]}`)
console.log(`Quantidade de elementos do vetor ${num.length}`)*/

var pos = num.indexOf(6)
if (pos == -1){
    console.log('O valor não foi encontrado')
}
else{
    console.log(`O valor 6 está na posição ${pos}`)
}