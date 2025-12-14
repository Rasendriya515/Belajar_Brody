let daftarBarang = [
    { nama: "Beras", harga: 50000, stok: 5},
    { nama: "Gula", harga: 15000, stok: 0},
    { nama: "Telur", harga: 20000, stok: 10},
];

console.log(`========================================`);
console.log(`Halo selamat datang di Warung Brody!`);
console.log(`Berikut adalah daftar barang di Warung Brody!`);

for (let i = 0; i < daftarBarang.length; i++) {
    console.log(`${i+1}. Nama: ${daftarBarang[i].nama}, Harga: ${daftarBarang[i].harga}, Stok: ${daftarBarang[i].stok}`);
}

let namaPembeli = "Brody";
let uangPembeli = 1000;
let barangDicari = "Telur";

console.log(`Silahkan dipilih barang yang diinginkan!`);
console.log(`========================================`);

for (let i = 0; i < daftarBarang.length; i++) {
    if (daftarBarang[i].nama === barangDicari) {
        console.log(`Barang ditemukan: ${daftarBarang[i].nama}`);
        if (daftarBarang[i].stok > 0) {
            console.log(`Stok tersedia: ${daftarBarang[i].stok}`);
            if (uangPembeli >= daftarBarang[i].harga) {
                daftarBarang[i].stok = daftarBarang[i].stok - 1;
                uangPembeli = uangPembeli - daftarBarang[i].harga;
                console.log(`Transaksi BERHASIL! Sisa uang ${namaPembeli}: Rp ${uangPembeli}`);
                console.log(`Sisa stok ${daftarBarang[i].nama} sekarang: ${daftarBarang[i].stok}`);
            } else {
                console.log(`Uang tidak cukup bro! Kurang Rp ${daftarBarang[i].harga - uangPembeli}`);
            }
        } else {
            console.log(`Maaf, stok ${daftarBarang[i].nama} habis!`);
        }
    }
}