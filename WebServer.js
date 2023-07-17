var http = require('http');

var server = http.createServer(function(req, res) {
    res.end("Hi, selamat datang di nodejs");
});

server.listen(8000);

console.log("server running on http://localhost:8000");

//  Kode dimulai dengan membuat server HTTP.
//  Kode kemudian membuat fungsi yang akan dipanggil ketika server menerima permintaan dari klien.
//  Dalam hal ini, itu hanya mencetak "Hai, selamat datang di nodejs" ke console.
//  pada port 8000 mencetak "server yang berjalan di http://localhost:8000".
//  Kodenya adalah server nodejs sederhana yang akan merespons dengan "Hai, selamat datang di nodejs" untuk setiap permintaan yang masuk.
//  Tujuan dari kode di atas adalah agar server berjalan di http://localhost:8000 dan merespons dengan "Hai, 
//selamat datang di nodejs" untuk setiap permintaan yang masuk.