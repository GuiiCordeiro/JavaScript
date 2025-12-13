function contagem(){
    var tini = document.getElementById('txtini')
    var tfim = document.getElementById('txtfim')
    var tpasso = document.getElementById('txtpasso')
    var res = document.getElementById('res');
    

    var ini = Number(tini.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)

    if (ini == 0 || fim == 0){
        res.innerText = ('Impossível contar')
    }
    else if(passo == 0){
        window.alert('Passo inválido! Considerando passo 1')
    }
    else{
        res.innerHTML = ('Contando: <br>' )

        if(ini < fim){
            // Contagem Crescente
            for(c = ini; c <= fim; c += passo){
                res.innerText += ` ${c} 👉`
            }
        }
        else{
            // Contagem Descrescente
            for(c = ini; c >= fim; c -= passo){
                res.innerText += ` ${c} 👉`
            }
        }
        res.innerText += `🏴󠁧󠁢󠁥󠁮󠁧󠁿`
    }
    
  
}