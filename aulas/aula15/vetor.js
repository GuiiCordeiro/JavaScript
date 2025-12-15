var num = [5, 3, 2, 9, 6]
/*
for(var pos = 0; pos < num.length ; pos++){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
    */
   
for(var pos in num){
    console.log(num[pos])
}