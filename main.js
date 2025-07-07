const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "initial"; 
});

offcanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = ""; 
});

// document.addEventListener("DOMContentLoaded", () => {
//     const offcanvasElement = document.getElementById('offcanvasNavbar');
//     const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
//     const navLinks = offcanvasElement.querySelectorAll('.nav-link');
//     const navbarHeight = document.querySelector('.navbar').offsetHeight;

//     navLinks.forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             const scrollToTarget = () => {
//                 if (targetElement) {
//                     const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//                     const offsetPosition = elementPosition - navbarHeight + 170;

//                     window.scrollTo({
//                         top: offsetPosition,
//                         behavior: 'smooth'
//                     });
//                 }
//             };

//             // Tunggu sedikit setelah offcanvas tertutup, baru scroll
//             offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
//                 setTimeout(scrollToTarget, 50);  // delay kecil supaya smooth
//             }, { once: true }); // pastikan hanya 1 kali jalan

//             // Tutup offcanvas
//             offcanvas.hide();
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const navLinks = offcanvasElement.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const customOffset = parseInt(link.getAttribute('data-offset')) || 0;

            const scrollToTarget = () => {
                if (targetElement) {
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight + customOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };

            offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
                setTimeout(scrollToTarget, 50); 
            }, { once: true }); 

            offcanvas.hide();
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Bunga & tali
        if (entry.target.classList.contains('parallax-bunga') || entry.target.classList.contains('parallax-tali') || entry.target.classList.contains('parallax-atas') || entry.target.classList.contains('parallax-rencana') || entry.target.classList.contains('parallax-pengesahan') || entry.target.classList.contains('parallax-kepanitiaan')){
          if (entry.target.classList.contains('left')) {
            entry.target.classList.add('animate-slide-in-left');
          } else if (entry.target.classList.contains('right')) {
            entry.target.classList.add('animate-slide-in-right');
          }
        }

        // Lampu
        if (entry.target.classList.contains('parallax-lampu') || entry.target.classList.contains('parallax-lampu-2') || entry.target.classList.contains('gambar-pendahuluan') || entry.target.classList.contains('parallax-lampu-atas-tujuan') || entry.target.classList.contains('gambar-tujuan') || entry.target.classList.contains('parallax-lampu-rencana') || entry.target.classList.contains('gambar-rencana') || entry.target.classList.contains('parallax-lampu-atas-dokumentasi') || entry.target.classList.contains('parallax-lampu-pengesahan') || entry.target.classList.contains('parallax-lampu-atas-anggaran') || entry.target.classList.contains('parallax-lampu-kepanitiaan') || entry.target.classList.contains('parallax-lampu-atas-pengantar')) {
          entry.target.classList.add('show');
        }

        // Gambar utama
        if (entry.target.classList.contains('gambar-utama') || entry.target.classList.contains('gambar-dokumentasi') || entry.target.classList.contains('gambar-pengesahan') || entry.target.classList.contains('gambar-anggaran') || entry.target.classList.contains('gambar-kepanitiaan') || entry.target.classList.contains('gambar-pengantar')) {
          entry.target.classList.add('show');
        }

      } else {
        entry.target.classList.remove('animate-slide-in-left', 'animate-slide-in-right', 'show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.parallax-bunga, .parallax-lampu, .parallax-tali, .gambar-utama, .parallax-atas, .parallax-lampu-2, .gambar-pendahuluan, .parallax-lampu-atas-tujuan, .gambar-tujuan, .parallax-lampu-rencana, .gambar-rencana, .parallax-rencana, .parallax-lampu-atas-dokumentasi, .gambar-dokumentasi, .parallax-pengesahan, .parallax-lampu-pengesahan, .gambar-pengesahan, .parallax-lampu-atas-anggaran, .gambar-anggaran, .parallax-kepanitiaan, .parallax-lampu-kepanitiaan, .gambar-kepanitiaan, .parallax-lampu-atas-pengantar, .gambar-pengantar').forEach(el => {
    observer.observe(el);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay   = document.getElementById('loadingOverlay');
  const startBtn  = document.getElementById('startButton');
  const content   = document.getElementById('pageContent');
  const audio     = document.getElementById('backgroundMusic');
  const iconWrap  = document.getElementById('audioIconWrapper');

  // Ketika tombol Mulai diklik:
  startBtn.addEventListener('click', () => {
    // Unmute & play audio (autoplay muted diizinkan)
    audio.muted = false;
    audio.play().catch(()=>{});

    // Sembunyikan overlay dan tampilkan konten + ikon CD
    overlay.style.display    = 'none';
    content.style.visibility = 'visible';
  });

});
