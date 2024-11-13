 //console.log("Hello World")

//let namahewan ="Ayam, Bebek, Monyet"
//console.log(namahewan)

//let nama="Mark"
//let greeting=`Hallo nama saya ${nama}`
//console.log(greeting)

//daftarSiswa = ["Ais", "Diva", "Vita", "Lala", "Vinanda"]
//console.log("1. "+daftarSiswa[0])
//console.log("2. "+daftarSiswa[1])
//console.log("3. "+daftarSiswa[2])
//console.log("4. "+daftarSiswa[3])
//console.log("5. "+daftarSiswa[4])

daftarSiswa = ["Ais", "Abcd", "Aryo", "Diva", "Vita", "Lala", "Vinanda"]
for(let i=0; i<5; i++){
    console.log (`${i+1}. ${daftarSiswa[i]}`)
    
}

//for(let nama of daftarSiswa) {
    //console.log(nama)
//}

//for(let nama in daftarSiswa) {
    //console.log(daftarSiswa[nama])
//}

//daftarSiswa = ["Ais", "Diva", "Vita", "Lala", "Vinanda"]
//daftarSiswa[1] = "Mark Lee"
//console.log(daftarSiswa)

//daftarSiswa1 = "Ais"
//console.log("1. "+daftarSiswa1[0])
//console.log("2. "+daftarSiswa1[1])
//console.log("3. "+daftarSiswa1[2])

let jumlah = 0
for(let i=0; i<5; i++) {
    if (daftarSiswa[i] [0] == "A") {
        console.log("ketemu")
        jumlah++;
    }
}
console.log("jumlah huruf a adalah", jumlah)