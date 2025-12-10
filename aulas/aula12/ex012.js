var horario = new Date()
var hora = horario.getHours()
var minutos = horario.getMinutes()
console.log(`Agora são exatamente ${hora}:${minutos} horas`)
if(hora < 12){
    console.log('Bom dia')
}
else if(hora < 19){
    console.log('Boa tarde')
}
else{
    console.log('Boa noite')
}