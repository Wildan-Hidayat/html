const audioPlayer = document.getElementById('audioPlayer');
const playlistItems = document.querySelectorAll('#playlist li');
let currentTrack = null;

playlistItems.forEach((item, index) => {
  const playPauseBtn = item.querySelector('.playPauseBtn');
  playPauseBtn.addEventListener('click', () => playPauseTrack(index));
});

function playPauseTrack(index) {
  if (currentTrack !== index) {
    // Load and play new track
    loadTrack(index);
  } else {
    // Pause or play current track
    if (audioPlayer.paused) {
      audioPlayer.play();
      updateButton(currentTrack, 'Pause');
    } else {
      audioPlayer.pause();
      updateButton(currentTrack, 'Play');
    }
  }
}

function loadTrack(index) {
  if (currentTrack !== null) {
    updateButton(currentTrack, 'Play');
  }
  audioPlayer.src = playlistItems[index].getAttribute('data-src');
  audioPlayer.play();
  updateButton(index, 'Pause');
  currentTrack = index;
}

function updateButton(index, action) {
  const playPauseBtn = playlistItems[index].querySelector('.playPauseBtn');
  const icon = playPauseBtn.querySelector('i');
  if (action === 'Pause') {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
}

audioPlayer.addEventListener('ended', () => {
  const nextTrack = (currentTrack + 1) % playlistItems.length;
  loadTrack(nextTrack);
});

window.onload = ()=> {
  alert("Terima Kasih Sudah Mampir Ini Adalah Daftar Musik Yang Menurut Saya Enak Didengar. Jangan Lupa Untuk Dukung Terus Pemilik Asli Dari Musik Ini <(^_^)> Jangan Di Sebar Luaskan Dengerin Sendiri Aja Untuk Tenangin Hati & Pikiran Meskipun Malah Jadi Tambah Pikiran Karena Kuota Takut Habis");
  alert("Daftar Nama Artis: ")
}