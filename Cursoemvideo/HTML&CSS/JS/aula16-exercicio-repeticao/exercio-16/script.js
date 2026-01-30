function contar() {
    let ini = Number(document.getElementById("txti").value)
    let fim = Number(document.getElementById("txtf").value)
    let passo = Number(document.getElementById("txtp").value)
    let res = document.getElementById("res")

    if (ini == 0 || fim == 0 || passo == 0) {
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando:'
    }
}
