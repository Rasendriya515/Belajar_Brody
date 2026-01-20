const kotak = document.getElementById('kotak-emosi');
const tombol = document.getElementById('tombol-aksi');

tombol.addEventListener('click', function() {
    kotak.style.backgroundColor = "yellow";

    const teksJudul = kotak.querySelector('h1');
    teksJudul.innerHTML = "HORE! SAYA SENANG! 😄";
    teksJudul.style.color = "red";

    console.log("Tombol berhasil diklik, emosi berubah");
});