let laci = [1, 2, 3, 4, 5, 6, 7]
let kunci = 5

for (let i = 0; i < laci.length; i++) {
    console.log(`Cek laci: ${laci[i]}`);

    if (laci[i] === kunci) {
        console.log(`Udah ketemu di laci ${laci[i]}`);
        break;
    }
}