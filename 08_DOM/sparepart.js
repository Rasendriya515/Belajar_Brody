const inputBarang = document.getElementById('nama-barang');
const catat = document.getElementById('catatan');
const daftar = document.getElementById('daftar-barang');

catat.addEventListener('click', function () {

    if (inputBarang.value === "") {
        alert("Isi dulu nama barangnya.");
        return;
    }

    const namaBarang = inputBarang.value;
    const barangBaru = document.createElement('li');

    barangBaru.innerText = `${namaBarang}`;
    barangBaru.classList.add('list-barang')

    barangBaru.addEventListener('click', function () {

        barangBaru.classList.toggle('done')

    });

    barangBaru.addEventListener('dblclick', function() {
       
        if (confirm("Yakin mau hapus barang ini?")) {
            barangBaru.remove();
            alert("Barang dihapus");
        }

    });

    daftar.appendChild(barangBaru);
    inputBarang.value = "";

    console.log("Barang berhasil ditambahkan!");

})