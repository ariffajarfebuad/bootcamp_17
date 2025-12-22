const yargs = require("yargs");
const { hideBin } = require("yargs/helpers"); // Tambahkan hideBin
const contacts = require("./contacts.js");

// --- Inisialisasi Yargs dan Rantai Perintah ---
yargs(hideBin(process.argv)) // 👈 1. Inisialisasi Yargs dengan argumen
  .command({
    command: "add",
    describe: "Add a new contact",
    builder: {
      name: {
        describe: "Contact name",
        demandOption: true,
        type: "string",
      },

      mobile: {
        describe: "Contact mobile number",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Contact email",
        demandOption: false,
        type: "string",
      },
    },
    handler(argv) {
      // Pastikan urutan argumen di sini cocok dengan urutan di contacts.js
      contacts.saveContact(argv.name, argv.mobile, argv.email);
    },
  })
  .parse();
