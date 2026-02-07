let imageSize = 200;
let yesScale = 1;
let noClickCount = 0;

const images = [
  "snoopy_mad1.png",
  "snoopy_mad2.png",
  "snoopy_mad3.png",
"snoopy_mad4.png"
];

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const image = document.getElementById("cuteImage");
const areYouSureText = document.getElementById("areYouSure");

/* CONFETTI FUNCTION */
function launchConfetti() {
  for (let i = 0; i < 280; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    confetti.style.animationDuration =
      7 + Math.random() * 10 + "s";

    document.body.appendChild(confetti);

    setTimeout(function () {
      confetti.remove();
    }, 100000);
  }
}

/* NO BUTTON */
noBtn.addEventListener("click", function () {

  // SHAKE PAGE
  document.body.classList.remove("shake");
  void document.body.offsetWidth;
  document.body.classList.add("shake");

  // count NO clicks
  noClickCount = noClickCount + 1;

  // grow image
  imageSize = imageSize + 30;
  image.style.width = imageSize + "px";

  // grow YES button
  yesScale = yesScale + 0.2;
  yesBtn.style.transform = "scale(" + yesScale + ")";

  // change image
  if (noClickCount <= images.length) {
    image.src = images[noClickCount - 1];
  }

  // show ARE YOU SURE
  if (noClickCount === 4) {
    areYouSureText.style.display = "block";
  }
});

/* YES BUTTON */
yesBtn.addEventListener("click", function () {

  launchConfetti();

  setTimeout(function () {
    document.body.innerHTML = `

<div style="position: relative;">

    <!-- TOP LEFT FLOWER -->
    <img src="flower1.png" style="
     position: absolute;
     top: 0;
    left: 0;
     width: 180px;
     ">



     <!-- TOP RIGHT FLOWER -->
      <img src="flower2.png" style="
     position: absolute;
     top: 0;
    right: 0;
     width: 180px;
     ">



      <h1>HEHEHEHE BUUBBBUUUB 💕</h1>

      <div style="
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 80px;
        margin-top: 30px;
      ">

        <img src="end1.png" style="width:420px;">

        <div style="max-width:600px; margin: 0 auto; text-align:center;">
          <img src="final1.png" style="display:block; margin:30px auto; width:500px;">
          <p>
            Hi Sayang, thank you for being my valentines this year. I know you said you're not a ribet girl and all.
            However I want to always put effort and give it my all and try things I have never done just for you.
            To show you that you are so loved and have my 10000000% full attention and heart every single day.
            Even though our past has been rocky and all, I am glad to have you in my life and would not trade any
            single moment we have had over anything. Thank you for being such a beautiful presence in this boring life.
            I hope I can continue to call you my valentines for the rest of my life.
            Te amo amore mio, Happy Valentines. 🥰
          </p>
        </div>

        <img src="end2.png" style="width:520px;">

      </div>
    `;
  }, 800);
});
