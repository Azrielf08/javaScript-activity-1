const daftarSiswa = [
    {
    nama: "Rosa",
    jenKel: "P",
    umur: "17",
    wfavorit: "kuning",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
},
{
    nama: "Rizki",
    jenKel: "L",
    umur: "16",
    wfavorit: "merah",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
},
{
    nama: "Ambar",
    jenKel: "P",
    umur: "16",
    wfavorit: "ungu",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
},
{
    nama: "Mila",
    jenKel: "P",
    umur: "18",
    wfavorit: "biru",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
},
{
    nama: "Bagas",
    jenKel: "L",
    umur: "15",
    wfavorit: "coklat",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
}
]
  let mode = 'tambah'

//arrow function

const tampilkanSiswa = () => {

        const tblSiswa = document.getElementById('tblSiswa')
        tblSiswa.innerHTML = `<tr><th>No</th><th>Nama</th><th>Jenis Kelamin</th><th>Umur</th><th>Warna Favorit</th><th>Edit<th>Hapus</th></tr>`

        for(let idx in daftarSiswa){
            console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} jenis kelamin ${daftarSiswa[idx].jenKel} berumur ${daftarSiswa[idx].umur} dan suka warna ${daftarSiswa[idx].wfavorit}`);

            tblSiswa.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarSiswa[idx].nama}</td><td>${daftarSiswa[idx].jenKel}</td><td>${daftarSiswa[idx].umur}</td><td>${daftarSiswa[idx].wfavorit}</td><td><buton class= "btn btn-warning" onclick="editSiswa('${daftarSiswa[idx].nama}')">Edit</button></td><td><buton class= "btn btn-danger" onclick="hapusSiswa('${daftarSiswa[idx].nama}')">Delete</button></td></tr>`
    }

}

const tambahSiswa = () => {
    const nama = document.getElementById('txtNama').value
    const jenKel = document.getElementById('jenKel').value
    const umur = document.getElementById('nbrUmur').value
    const wfavorit = document.getElementById('wFavorit').value
    const siswaBaru= {
        nama: nama,
        jenKel: jenKel,
        umur: umur,
        wfavorit: wfavorit,
        seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
    }

    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[0] = siswaBaru
    }

    document.getElementById('txtNama').value =""
    document.getElementById('jenKel').value = ""
    document.getElementById('nbrUmur').value = ""
    document.getElementById('wFavorit').value = ""

    mode = 'tambah'

    tampilkanSiswa()
 }

 const cariIndex = (nama) => {
    for(let i =0; i<daftarSiswa.length; i++) 
        if (daftarSiswa[i].nama == nama){
            return i
        }
        return -1;
 }
 
 const hapusSiswa = (target) => {
    const indexDihapus= cariIndex (target)
    if (indexDihapus !== -1 ) {
    daftarSiswa.splice(indexDihapus,1)
    tampilkanSiswa()
    }

 }

 const editSiswa = (target) => {
    const indexEdit = cariIndex(target)
    
    console.log(target)
    console.log(indexEdit)
    console.log(daftarSiswa[indexEdit])

    const siswaDiedit = daftarSiswa[indexEdit]

    document.getElementById('txtNama').value = siswaDiedit.nama
    document.getElementById('jenKel').value = siswaDiedit.jenKel
    document.getElementById('nbrUmur').value = siswaDiedit.umur
    document.getElementById('wFavorit').value = siswaDiedit.wfavorit

    mode =  indexEdit

    


    //const namaBaru = prompt('Masukkan Nama')
    //const jenKelBaru = prompt('Masukkan Jenis Kelamin')
    //const umurBaru = prompt('Masukkan Umur')
    //const wfavoritBaru = prompt('Masukkan Warna Favorit')

    //daftarSiswa[indexEdit] = {
        //nama: namaBaru,
        //jenKel : jenKelBaru,
        //umur: umurBaru,
        //wfavorit: wfavoritBaru
    //}
 }
 const batalEdit = (target) => {
    document.getElementById('txtNama').value =""
    document.getElementById('jenKel').value = ""
    document.getElementById('nbrUmur').value = ""
    document.getElementById('wFavorit').value = ""
     mode = 'tambah' 
}

 