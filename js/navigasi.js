function loadNavigation() {
  fetch("../navigasi.html") // Gunakan ../ untuk kembali satu level ke direktori utama
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navigasi").innerHTML = data;
      // Tambahkan kode untuk menambahkan kelas 'active' ke elemen navigasi yang sesuai
      const currentPath = window.location.pathname.split("/").pop();

      switch (currentPath) {
        case "index.html":
          document.getElementById("nav-home").classList.add("active");
          break;
        case "about.html":
          document.getElementById("nav-about").classList.add("active");
          break;
        case "courses.html":
          document.getElementById("nav-courses").classList.add("active");
          break;
        case "team.html":
          document.getElementById("nav-team").classList.add("active");
          break;
        case "testimonial.html":
          document.getElementById("nav-testimonial").classList.add("active");
          break;
        case "404.html":
          document.getElementById("nav-404").classList.add("active");
          break;
        case "contact.html":
          document.getElementById("nav-contact").classList.add("active");
          break;
        default:
          break;
      }
    })
    .catch((error) => console.log("Error:", error));
}

document.addEventListener("DOMContentLoaded", loadNavigation);
