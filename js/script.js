document.addEventListener("DOMContentLoaded", function() {
  // Fungsi untuk membuat angka bergerak
  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // Inisialisasi nilai awal
  let anggotaCount = 2105;
  let judulCount = 6505;
  let bukuCount = 6747;
  let ebookCount = 2000;

  // Durasi animasi (dalam milidetik)
  let animationDuration = 3000; // 5000 ms = 5 detik

  // Fungsi untuk memulai animasi dan penghitungan otomatis
  function startCounting() {
    animateValue(document.querySelector('.anggota-count'), 0, anggotaCount, animationDuration);
    animateValue(document.querySelector('.judul-count'), 0, judulCount, animationDuration);
    animateValue(document.querySelector('.buku-count'), 0, bukuCount, animationDuration);
    animateValue(document.querySelector('.ebook-count'), 0, ebookCount, animationDuration);
  }

  // Panggil fungsi untuk memulai animasi dan penghitungan otomatis
  startCounting();
});
