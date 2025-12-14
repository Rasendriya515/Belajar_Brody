let platNomor = [234, 431, 890, 111, 567, 202];

for (let i = 0; i < platNomor.length; i++) {
    if (platNomor[i] % 2 === 0) {
        console.log(`Plat ${platNomor[i]} -> Lolos, silakan jalan! 🚗`);
    } else {
        console.log(`Plat ${platNomor[i]} -> GANJIL! Tilang Rp 500rb!`);
    }
}