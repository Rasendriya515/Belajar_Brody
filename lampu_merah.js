let lampu = "Merah";
let action;

if (lampu === "Merah") {
    action = "BERHENTI!";
} else if (lampu === "Kuning") {
    action = "Hati - hati!";
} else if (lampu === "Hijau") {
    action = "GAS JALAN!";
} else {
    action = "Lampu Rusak woy!"
}

console.log(action)