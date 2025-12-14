let nilaiUjian = [105, 45, 80, 120, 55, 90];

for (let i = 0; i < nilaiUjian.length; i++) {
    let nilaiAsli = nilaiUjian[i]; 

    if (nilaiUjian[i] > 100) {
        nilaiUjian[i] = 100;
        console.log(`Nilai ${nilaiAsli} kegedean! Dipotong jadi 100.`); 
    } 
    else if (nilaiUjian[i] < 60) {
        nilaiUjian[i] = nilaiUjian[i] + 10;
        console.log(`Nilai ${nilaiAsli} kekecilan! Dapat bonus +10 jadi ${nilaiUjian[i]}`);
    } 
    else {
        console.log(`Nilai ${nilaiAsli} aman.`);
    }
}

console.log(`Data Nilai Terbaru: ${nilaiUjian}`);