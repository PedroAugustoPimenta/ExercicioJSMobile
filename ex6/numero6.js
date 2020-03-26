window.onload = function () {

    let conexao = document.getElementById("conexao");
    document.getElementById("memoria").innerHTML = navigator.deviceMemory;

    if (navigator.online ? conexao.innerHTML = "conectado" : conexao.innerHTML = "desconectado");

    document.getElementById("lingua").innerHTML = navigator.language;
    document.getElementById("useragent").innerHTML = navigator.userAgent;

}