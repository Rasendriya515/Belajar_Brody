const inputNama = document.getElementById('nama-pelanggan');
const inputMobil = document.getElementById('nama-mobil');
const tombol = document.getElementById('daftar-service');
const hasil = document.getElementById('hasil')

tombol.addEventListener('click', function () {
    const namaUser = inputNama.value;
    const namaMobil = inputMobil.value;
    
    hasil.innerHTML = "Halo Tuan " + namaUser + "! Tim kami siap memperbaiki " + namaMobil + " anda. Silahkan tunggu di ruang tunggu."
    hasil.style.color = "green";

    inputNama.value = "";
    inputMobil.value = "";
})