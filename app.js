const flip = document.getElementById("flip");
const final_result = document.getElementById("final-result");
const reset_button = document.getElementById("reset");
const image = document.getElementById("coinImage");

function flipCoin() {
  image.classList.add("flip-animation");
  setTimeout(() => {
    let result = Math.random();
    if (result < 0.5) {
      final_result.textContent = "Head";
      image.src = "Assets/heads.svg";
    } else {
      final_result.textContent = "Tail";
      image.src = "Assets/tails.svg";
    }
  

  setTimeout(() => {
    image.classList.remove("flip-animation");
  }, 1000);
}, 10);
}


function resetCoin() {
  final_result.textContent = "Press flip to start";
}

flip.addEventListener("click", flipCoin);
reset_button.addEventListener("click", resetCoin);
