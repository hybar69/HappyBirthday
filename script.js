function flipBoxText() {
    const boxText = document.querySelector('.box-text');
    const envelope = document.querySelector('.envelope');
  
    // Menambahkan atau menghapus class "show" untuk memicu animasi flip
    if (boxText.style.display === 'none' || boxText.style.display === '') {
      boxText.style.display = 'block';
      setTimeout(() => {
        boxText.classList.add('show');
      }, 10); // Menunggu sedikit sebelum animasi dimulai
      
      // Menyembunyikan amplop setelah diklik
      envelope.classList.add('hide');
    } else {
      boxText.classList.remove('show');
      setTimeout(() => {
        boxText.style.display = 'none';
      }, 600); // Menunggu animasi selesai sebelum menyembunyikan elemen
    }
  }
  

  // Ambil elemen yang dibutuhkan
const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const currentTimeDisplay = document.querySelector(".current-time");
const totalTimeDisplay = document.querySelector(".total-time");
const volumeSlider = document.getElementById("volumeSlider");

// Fungsi Play/Pause
let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "⏯"; // Tombol Play
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸"; // Tombol Pause
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener("click", togglePlayPause);

// Update Progress Bar
audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update waktu saat ini dan durasi total
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

// Format waktu (detik ke menit:detik)
function formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Kontrol Volume
volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});

// Set total waktu ketika lagu dimuat
audio.addEventListener("loadedmetadata", () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
});
