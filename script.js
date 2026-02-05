import { User } from "./class/user.js"

const form = document.querySelector("#form");
const progress = document.querySelector("#progress-bar");

const fields = [
  document.querySelector("#name-input"),
  document.querySelector("#email-input"),
  document.querySelector("#password-input"),
  document.querySelector("#password-confirm-input"),
];

const MAX = 100;

// conta quantos campos estão preenchidos
function countFilled() {
  return fields.reduce((acc, el) => acc + (el.value.trim() !== "" ? 1 : 0), 0);
}

// anima o value do <progress> até o target (0..100)
function animateProgressTo(target, duration = 350) {
  const start = Number(progress.value) || 0;
  const startTime = performance.now();

  function update(t) {
    let p = (t - startTime) / duration;
    if (p > 1) p = 1;

    // ease-out (suaviza no final)
    const eased = 1 - Math.pow(1 - p, 3);

    const val = start + (target - start) * eased;
    progress.value = Math.max(0, Math.min(MAX, val));

    if (p < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

// calcula para onde a barra deve ir e anima
function updateProgress() {
  const filled = countFilled(); // 0..4
  const target = (filled / fields.length) * MAX; // 0..100
  animateProgressTo(target, 400);
}

// ✅ SEM parênteses aqui (senão executa na hora e não funciona)
fields.forEach((el) => el.addEventListener("input", updateProgress));

// opcional: se o navegador preencher automático (autofill), já atualiza
window.addEventListener("load", updateProgress);

form.addEventListener("submit", (e) => {
  if (fields[2].value == fields[3].value) {
    e.preventDefault()
    const id = crypto.randomUUID()
    localStorage.setItem("user_"+id ,JSON.stringify(new User(id, fields[0].value, fields[1].value, fields[2].value)))
    window.location.replace("./home/home.html?id="+encodeURIComponent(id))

  } else {
    alert("The passwords dont match")
    e.preventDefault()
  }
});

