const $eyes = document.getElementById("eyes");
const $pL = document.getElementById("pes-left");
const $pR = document.getElementById("pes-right");

$eyes.addEventListener("click", function (ev) {
  $pL.style.animationName = ""
  console.log($pL)
  if($pL )
  $pL.classList.toggle("pes-left");
  $pR.classList.toggle("pes-right");
})