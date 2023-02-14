window.onload = function () {
  var merrywrap = document.getElementById("merrywrap");
  var box = merrywrap.getElementsByClassName("theHeart")[0];
  var navbar = document.getElementById("navbar");
  var step = 1;
  var stepMinutes = [2000, 14000, 1000, 1000];

  // Get the heart element
  const heart = document.getElementById("heart");

  function init() {
    // Event listener for heart click
    // heart.addEventListener("click", vidClick);
    box.addEventListener("click", openBox, false);
  }
  function stepClass(step) {
    merrywrap.className = "merrywrap";
    merrywrap.className = "merrywrap step-" + step;
  }
  function openBox() {
    if (step === 1) {
      box.removeEventListener("click", openBox, false);
      vidClick();
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {
      reveal();
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
  }

  // Function for heart click
  function vidClick() {
    // Get the video element
    const video = document.getElementById("video");
    // Display the video
    video.style.display = "block";

    // Play the video
    video.play();

    // After 11 seconds, hide the video and pause it
    setTimeout(function () {
      video.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }, 15000);
  }
  function reveal() {
    document.querySelector(".merrywrap").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.display = "block";
  }

  init();
};

// this is for sending messages

function sendMessage(service, message) {
  console.log(`Sending message "${message}" via ${service}`);
}
const facebookLink = document.getElementById("facebook");
const emailLink = document.getElementById("email");
const messageLink = document.getElementById("message");
const whatsappLink = document.getElementById("whatsapp");

const message =
  "I am thankful to the heavens for having you in my life. From the day you entered into my life with so much happiness, enjoyment, and laughter.";

facebookLink.addEventListener("click", function () {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(
      message
    )}`
  );
});

emailLink.addEventListener("click", function () {
  window.open(`mailto:?subject=&body=${encodeURIComponent(message)}`);
});

messageLink.addEventListener("click", function () {
  window.open(`sms:;?&body=${encodeURIComponent(message)}`);
});

whatsappLink.addEventListener("click", function () {
  window.open(
    `https://api.whatsapp.com/send?phone=&text=${encodeURIComponent(message)}`
  );
});
