const fs = require("fs");
const path = require("path");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      name: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: true,
        type: "string",
      },
      mobile: {
        describe: "Nomor HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      // Langsung load file JSON
      const file = fs.readFileSync(dataPath, "utf-8");
      const contacts = JSON.parse(file);

      // Data baru
      const newContact = {
        name: argv.name,
        email: argv.email,
        mobile: argv.mobile,
      };

      // Tambah ke array
      contacts.push(newContact);

      // Simpan
      fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));

      console.log(" Contactnya akan kesimpan ya!");
    },
  })
  .demandCommand()
  .parse();
