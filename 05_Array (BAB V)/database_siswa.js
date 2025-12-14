let daftarSiswa = [
    { nama: "Brody", nilai: 90},
    { nama: "Joko", nilai: 55},
    { nama: "Siti", nilai: 85}
]

for (let i = 0; i < daftarSiswa.length; i++) {
    console.log(`Nama saya ${daftarSiswa[i].nama} nilai saya ${daftarSiswa[i].nilai}.`);

    if (daftarSiswa[i].nilai >= 70) {
        console.log(`Selamat anda LULUS karena nilai anda ${daftarSiswa[i].nilai}`);
    } else {
        console.log(`Maaf anda TIDAK LULUS karena nilai anda ${daftarSiswa[i].nilai}`);
    }
}