var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
        'Kita <h1>Belajar</h1>! <p>NodeJs</p> <b>Ya Teman-teman</b>'

    );
    res.end();
}).listen(8000);

console.log("server running on http://localhost:8000");

// Kode dimulai dengan membuat objek server.
//  Fungsi server adalah menginformasikan pada port 8000 dan merespons dengan tipe konten teks/html.
//  Selanjutnya, ia menulis "Kita
// belajar
// !
// NodeJs

// Ya Teman-teman" dalam menanggapi setiap permintaan yang masuk dari klien.
//  Kode kemudian diakhiri dengan res.end(); yang memberi tahu NodeJS 
// bahwa ia harus berhenti mendengarkan permintaan baru pada saat ini dan menutup koneksi ketika semua permintaan telah ditangani.

//  Kesimpulannya Kode ini dimaksudkan untuk membuat server yang akan melayani konten halaman saat diminta.

//  Kemudian kita akan membuat server HTTP dan mendengarkan pada port 8000.
//  Baris pertama, "console.log("server berjalan di http://localhost:8000");", 
// mencetak tujuan dari kode ini.