const nao = document.getElementById("nao");
const sim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

nao.addEventListener("mouseover", () => {

    const largura = window.innerWidth - 120;
    const altura = window.innerHeight - 80;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    nao.style.left = x + "px";
    nao.style.top = y + "px";

});

sim.addEventListener("click", () => {

    mensagem.innerHTML = "EU SABIA ❤️🥹";

    nao.style.display = "none";

});