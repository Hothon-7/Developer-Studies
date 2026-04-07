function gerarTabuada() { // Alterado de 'tabuada' para 'gerarTabuada'
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Limpa a tabuada antes de gerar uma nova
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // Atribui um valor único para cada opção
            tab.appendChild(item)
            c++
        }
}
}