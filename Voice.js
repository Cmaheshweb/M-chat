function startListening() {
  if (!('webkitSpeechRecognition' in window)) {
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'mr-IN';
  recognition.start();

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    document.getElementById('output').innerText = text;
    speakText(text);
  };
}

function speakText(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'mr-IN';
  window.speechSynthesis.speak(msg);
}
