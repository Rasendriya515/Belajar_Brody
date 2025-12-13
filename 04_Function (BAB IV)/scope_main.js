let skorTotal = 0;

function hitungGol() {
    let gol = 1;
    skorTotal = skorTotal + gol;
    console.log(`Gol dicetak! Skor sekarang: ${skorTotal}`);
}

hitungGol();
hitungGol();
hitungGol();

console.log(`Skor Akhir: ${skorTotal}`);
console.log(`Jumlah Gol per tendangan: ${skorTotal}`);