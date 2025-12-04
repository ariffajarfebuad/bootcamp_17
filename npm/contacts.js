const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirpath = "./data";
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}
const datapath = "./data/contacts.json";
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, "[]", "utf-8");
}
const question = (ask) => {
  return new Promise((resolve, reject) => {
    rl.question(ask, (inputVariable) => {
      resolve(inputVariable);
    });
  });
};

saveContact = (name, mobile, email) => {
  const contact = { name, mobile, email };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("thank you ");
  rl.close();
};

module.exports = { saveContact, question };
