function apologize() {
    document.getElementById("yesBtn").style.transform = "scale(1.2)";
    document.getElementById("message").innerHTML = "yo sabia que dirias si, te pido disculpas por lo sucedido. Te quiero mucho niña ❤️.";
    document.getElementById("message").style.display = "block";
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);
  }
  
  function moveNoButton() {
    let noBtn = document.getElementById("noBtn");
    let xPos = Math.random() * (window.innerWidth - 100);
    let yPos = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = xPos + "px";
    noBtn.style.top = yPos + "px";
  }
  let scaleFactor = 1;

function moveNoButton() {
  let yesBtn = document.getElementById("yesBtn");
  let noBtn = document.getElementById("noBtn");
  let xPos = Math.random() * (window.innerWidth - 100);
  let yPos = Math.random() * (window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = xPos + "px";
  noBtn.style.top = yPos + "px";

  // Incrementar el tamaño del botón "Sí" cada vez que se hace clic en el botón "No"
  scaleFactor += 1.0;
  yesBtn.style.transform = "scale(" + scaleFactor + ")";
}
