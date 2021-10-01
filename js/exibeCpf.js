function exibeCpf() {
    var vCpf = document.getElementById("Cpf").value;
    var vRes = document.getElementById("Resultado");

    vRes.innerHTML = retornaSomenteNumeros(vCpf);

}

function retornaSomenteNumeros(pValor) {
    return pValor.replace(/[^0-9]/g, "");
}