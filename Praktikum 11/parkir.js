function hitungparkir(){
    //tangkap angka yg di input
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value

    //tangkap span utk hasil
    let hasildurasi = document.getElementById("hasildurasi")
    let totalbiaya = document.getElementById("totalbiaya")

    //hitung durasi parkir
    let durasi = keluar - masuk

    //hitung biaya parkir
    let biaya = 3000
    for(let i = 2; i < durasi; i++){
        biaya = biaya + 1000
    }

    // menampilkan hasil perhitungan
    hasildurasi.innerHTML = durasi
    totalbiaya.innerHTML = biaya
}