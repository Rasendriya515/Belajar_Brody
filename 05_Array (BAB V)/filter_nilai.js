let nilaiSiswa = [50, 85, 90, 45, 70, 65];

for (let i = 0; i < nilaiSiswa.length; i++) {
    console.log(`Nilai siswa ke-${i + 1} adalah ${nilaiSiswa[i]}`);

    if (nilaiSiswa[i] >= 70) {
        console.log(`Nilai ${nilaiSiswa[i]} -> LULUS! 🥳`);
    } else {
        console.log(`Nilai ${nilaiSiswa[i]} -> REMEDIAL! 📚`);
    }
} 