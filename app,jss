let selectedAvatar = '';

function selectAvatar(type) {
  selectedAvatar = type;
  document.querySelectorAll('.avatar-selector img').forEach(img => {
    img.classList.remove('selected');
  });
  document.getElementById(`${type}-avatar`).classList.add('selected');

  const avatarDisplay = document.getElementById('avatar-display');
  avatarDisplay.innerHTML = `<img src="${type}-avatar.png" alt="${type} avatar">`;
}
