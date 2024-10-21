document.getElementById('hornButton').addEventListener('click', function() {
  const audio = new Audio(horn.mp3);
  audio.play().catch(error => console.error('Failed to play the audio: ', error));
});
