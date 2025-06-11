const avatar = document.getElementById("avatar");
const output = document.getElementById("output");

function setAvatar(type) {
  if (type === "male") {
    avatar.src = "avatars/male.png";
  } else if (type === "female") {
    avatar.src = "avatars/female.png";
  }
  avatar.style.display = "block";
}

function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "mr-IN";

  recognition.onstart = () => {
    output.innerText = "ऐकत आहे...";
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.innerText = `तुमचं म्हणणं: ${transcript}`;
    speakBack(transcript);
  };

  recognition.onerror = () => {
    output.innerText = "काहीतरी चूक झाली.";
  };

  recognition.start();
}

function speakBack(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "mr-IN";
  synth.speak(utterance);
}
