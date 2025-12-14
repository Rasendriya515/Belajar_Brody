let lemari = ["Baju", "Celana", "Topi", "Kunci", "Jaket", "Dompet"];
let target = "Kunci";

for (let i = 0; i < lemari.length; i++) {
    console.log(`Sedang memeriksa laci ke-${[i]}: ${lemari[i]}`);

    if (lemari[i] === target) {
        console.log(`HORE! ${target} ditemukan di laci ke-${[i]}`);
        break;
    }
}