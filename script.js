const sim = document.getElementById("sim");
const nao = document.getElementById("nao");
const resposta = document.getElementById("resposta");
const musica = document.getElementById("musica");

// música só começa após interação
document.body.addEventListener("click", () => {
  musica.play().catch(() => {});
}, { once: true });

// botão NÃO foge
nao.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  nao.style.position = "absolute";
  nao.style.left = x + "px";
  nao.style.top = y + "px";
});

// botão SIM
sim.addEventListener("click", () => {
  resposta.innerHTML = "o homem aranha nos espera no cinema 🕷️🍿";

  document.body.style.background = "linear-gradient(135deg, #43cea2, #185a9d)";

  for (let i = 0; i < 60; i++) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "20px";
    document.body.appendChild(heart);

    let fall = setInterval(() => {
      heart.style.top = heart.offsetTop + 4 + "px";
      if (heart.offsetTop > window.innerHeight) {
        heart.remove();
        clearInterval(fall);
      }
    }, 20);
  }
});