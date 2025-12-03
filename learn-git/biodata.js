const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const biodata = {};

rl.question("Nama lengkap: ", (namaLengkap) => {
  biodata.namaLengkap = namaLengkap;

  rl.question("Nama panggilan: ", (namaPanggilan) => {
    biodata.namaPanggilan = namaPanggilan;

    rl.question("Tempat dan tanggal lahir: ", (ttl) => {
      biodata.ttl = ttl;

      rl.question("Jenis kelamin: ", (jk) => {
        biodata.jenisKelamin = jk;

        rl.question("Nomor telepon: ", (telepon) => {
          biodata.telepon = telepon;

          rl.question("Email: ", (email) => {
            biodata.email = email;

            rl.question("Alamat: ", (alamat) => {
              biodata.alamat = alamat;

              console.log(`

Nama Lengkap           : ${biodata.namaLengkap}
Nama Panggilan         : ${biodata.namaPanggilan}
Tempat & Tanggal Lahir : ${biodata.ttl}
Jenis Kelamin          : ${biodata.jenisKelamin}
Nomor Telepon          : ${biodata.telepon}
Email                  : ${biodata.email}
Alamat                 : ${biodata.alamat}


              `);

              rl.close();
            });
          });
        });
      });
    });
  });
});
