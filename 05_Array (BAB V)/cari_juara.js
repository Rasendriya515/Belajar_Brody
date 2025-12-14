let scoreSiswa = [60, 85, 95, 40, 95, 70];
let scoreTertinggi = 0;

for (let i = 0; i < scoreSiswa.length; i++) {
    console.log(`Nilai siswa saat ini adalah: ${scoreSiswa[i]}`);
    if (scoreSiswa[i] > scoreTertinggi) {
        scoreTertinggi = scoreSiswa[i];
    }
}

console.log(`Nilai tertinggi di kelas adalah: ${scoreTertinggi}`);