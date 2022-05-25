let starContainer = document.getElementById("stars");
let active = -1;
let rankingStar =
  localStorage.getItem("rankingStar") ??
  localStorage.setItem("rankingStar", active + 1);

for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");
  starImg.src = "../img/star.svg";
  starImg.className = "star-style";
  starContainer.appendChild(starImg);

  starImg.addEventListener("mouseover", () => onStarHover(i));
  starImg.addEventListener("mouseleave", onStarout);
  starImg.addEventListener("click", () => onStarClick(i));
}

let stars = document.querySelectorAll(".star-style");

function onStarHover(i) {
  fill(i);
}

function fill(ratingValue) {
  for (let i = 0; i < 5; i++) {
    if (i <= ratingValue) {
      stars[i].src = "../img/starColor.svg";
    } else {
      stars[i].src = "../img/star.svg";
    }
  }
}

function onStarout() {
  fill(active);
}

function onStarClick(i) {
  active = i;
  fill(active);
  localStorage.setItem("rankingStar", active + 1);
}

if (rankingStar >= 1) {
  for (let i = 0; i < 5; i++) {
    if (i <= rankingStar - 1) {
      stars[i].src = "../img/starColor.svg";
    } else {
      stars[i].src = "../img/star.svg";
    }
  }
}
