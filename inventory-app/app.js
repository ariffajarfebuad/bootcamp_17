const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const {addItem,listItems,detailItem,updateItem,removeItem,findItem } = require("./controllers/inventory");

yargs(hideBin(process.argv))
  // Add
  .command(
    "add",
    "Menambahkan item baru",
    {
      name: { describe: "Nama barang", demandOption: true, type: "string" },
      qty: { describe: "Jumlah barang", demandOption: true, type: "number" },
    },
    addItem
  )
  // List
  .command("list", "Menampilkan semua item", {}, listItems)
  // Detail
  .command(
    "detail",
    "Menampilkan detail item",
    { name: { describe: "Nama barang", demandOption: true, type: "string" } },
    detailItem
  )
  // Update
  .command(
    "update",
    "Mengupdate jumlah barang",
    {
      name: { describe: "Nama barang", demandOption: true, type: "string" },
      qty: { describe: "Jumlah baru", demandOption: true, type: "number" },
    },
    updateItem
  )
  // Remove
  .command(
    "remove",
    "Menghapus item",
    { name: { describe: "Nama barang", demandOption: true, type: "string" } },
    removeItem
  )
  // Find
  .command(
    "find",
    "Mencari item berdasarkan keyword",
    { keyword: { describe: "Keyword", demandOption: true, type: "string" } },
    findItem
  )
  .parse();
