const totalAngkot = 10;
let angkotBeroperasi = 6;

for (let nomorAngkot = 1; nomorAngkot <= totalAngkot; nomorAngkot++) {
    if (nomorAngkot === 5) {
        console.log("Angkot No.", nomorAngkot, "sedang lembur."); 
    } else if (nomorAngkot <= angkotBeroperasi) {
        console.log("Angkot No.", nomorAngkot, "baik.")
    } else if (nomorAngkot === 8 || nomorAngkot === 10) {
        console.log("Angkot No.", nomorAngkot, "sedang lembur.")
    }
    else {
        console.log("Angkot No.", nomorAngkot, "rusak.")
    }
}