// Kerjakan kode JavaScript kalian di bawah ini
let nama = "";
umur = 0;
myMoney = 0;
var hargaKopi = 25000;
var hargaJuice = 10000;
var nama1 =(nama === 'Stefano Mario' ? ': Silakan masuk' : 'Kosong nih isi dong :*');
console.log ("===== Pengunjung Cafe Strada =====")
if (nama === "") {
    console.log (nama1)
} else if (nama === "Stefano Mario"){
    console.log (nama + ' ' + nama1);
}else {
    console.log(nama + nama1);
}

if (umur <= 0) {
    console.log ()
} else if (umur >= 13) {
    console.log ('Anda bisa memesan kopi')
} else {
    console.log ('Anda bisa memesan juice')
}

if (myMoney <= 0){
    console.log ()
} else if (myMoney === hargaJuice){
    console.log ('Sisa kembali anda = ${myMoney - hargaJuice}')
} else if (myMoney >=hargaKopi) {
    console.log ('Sisa kembali anda = ${myMoney - hargaKopi}')
}else {
    console.log ('Maaf uang anda tidak cukup')
}
console.log ("===================================")