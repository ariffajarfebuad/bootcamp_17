const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "inventory.json");

// READ JSON → array
function loadData() {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  try {
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

// WRITE array → JSON
function saveData(items) {
  fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
}

module.exports = { loadData, saveData };
