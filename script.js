// Efek ngetik untuk teks pembuka
const teks = "Selamat datang di dunia horor... Bersiaplah untuk merinding.";
let index = 0;
const speed = 80; // kecepatan ketik (ms)

function typeEffect() {
  if (index < teks.length) {
    document.getElementById("intro-text").textContent += teks.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

// Jalankan efek saat halaman selesai dimuat
window.onload = typeEffect;
