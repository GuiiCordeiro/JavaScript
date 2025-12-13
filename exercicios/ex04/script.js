function tabuada(){

    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    var c = 1
    var num = Number(txtnum.value)

    if(txtnum.value.length == 0){
        window.alert('Por favor, digite um número!')
        return
    }
   tab.innerHTML = ''
    while(c <= 10 ){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c += 1
    }
}