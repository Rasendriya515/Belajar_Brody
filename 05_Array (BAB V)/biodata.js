let diriSaya = {
    nama: "Rafi Rasendriya",
    umur: 22,
    alamat: "Jatiwaringin",
    pekerjaan: "Fullstack Developer",
    hobi: ["Coding", "Game"],
    "favorit makanan": "Indomie Rendang"
}

console.log(`Halo, nama saya ${diriSaya.nama}, umur saya ${diriSaya.umur} tahun.`);
console.log(`Saya tinggal di ${diriSaya.alamat} dan hobi saya ${diriSaya.hobi[1]}`);
console.log(`Kalau makanan favorit saya adalah ${diriSaya["favorit makanan"]}`);