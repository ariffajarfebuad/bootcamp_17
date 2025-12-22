const { loadData, saveData } = require("../utils/storage");

// Menambahkan item baru
function addItem(argv) {
  const items = loadData();
  const exist = items.find(
    (i) => i.name.toLowerCase() === argv.name.toLowerCase()
  );

  if (exist) {
    console.log("Item sudah ada.");
    return;
  }

  items.push({ name: argv.name, qty: argv.qty });
  saveData(items);

  console.log("Item berhasil ditambahkan.");
}

// Menampilkan semua item
function listItems() {
  const items = loadData();
  if (items.length === 0) return console.log("Belum ada data.");

  items.forEach((i, idx) => {
    console.log(`${idx + 1}. ${i.name} - qty: ${i.qty}`);
  });
}

// Menampilkan detail item
function detailItem(argv) {
  const items = loadData();
  const found = items.find(
    (i) => i.name.toLowerCase() === argv.name.toLowerCase()
  );

  if (!found) return console.log("Item tidak ditemukan.");

  console.log(found);
}

// Mengupdate jumlah item
function updateItem(argv) {
  const items = loadData();
  const idx = items.findIndex(
    (i) => i.name.toLowerCase() === argv.name.toLowerCase()
  );

  if (idx === -1) return console.log("Item tidak ditemukan.");

  items[idx].qty = argv.qty;
  saveData(items);

  console.log("Item berhasil diperbarui.");
}

// Menghapus item
function removeItem(argv) {
  const items = loadData();
  const filtered = items.filter(
    (i) => i.name.toLowerCase() !== argv.name.toLowerCase()
  );

  if (filtered.length === items.length)
    return console.log("Item tidak ditemukan.");

  saveData(filtered);
  console.log("Item berhasil dihapus.");
}

// Mencari item berdasarkan keyword
function findItem(argv) {
  const items = loadData();
  const keyword = argv.keyword.toLowerCase();

  const results = items.filter((i) => i.name.toLowerCase().includes(keyword));

  if (results.length === 0) return console.log("Tidak ada item yang cocok.");

  results.forEach((i) => {
    console.log(`- ${i.name} (qty: ${i.qty})`);
  });
}

module.exports = {
  addItem,
  listItems,
  detailItem,
  updateItem,
  removeItem,
  findItem,
};
