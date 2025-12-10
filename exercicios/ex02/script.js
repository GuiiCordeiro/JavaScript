function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'imagens/babyman.jpg')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/youngman.jpg')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultman.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/oldman.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagens/babywoman.jpg')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/younggirl.jpg')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/adultwoman.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/oldwoman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
