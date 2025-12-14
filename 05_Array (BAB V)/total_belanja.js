let hargaBarang = [15000, 20000, 5000, 50000, 100000];
let totalHarga = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalHarga = totalHarga + hargaBarang[i];
    console.log(`Menambahkan barang ke-${i + 1}: ${hargaBarang[i]}`);
}

console.log(`Total belanjaan Anda adalah: Rp ${totalHarga}`);