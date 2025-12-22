const fs = require("fs");
const validator = require("validator");

// Folder & File
// const dirPath = "./data";
// if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

// const dataPath = "./data/contacts.json";
// if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, "[]", "utf-8");

// Load Contacts
const loadContact = () => {
  const file = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(file);
};
const findContact = (name) => {
  const contacts = loadContact();
  const decodedName = decodeURIComponent(name);

  return contacts.find((contact) => contact.name === decodedName);
};
const checkDuplicate = (name) => {
  const contacts = loadContact();
  return contacts.find((contact) => contact.name === name);
};

const saveContacts = (contacts) => {
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
};

const addContact = (contact) => {
  const contacts = loadContact();
  contacts.push(contact);
  saveContacts(contacts);
};

const deleteContact = (name) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.name.toLowerCase() !== name.toLowerCase()
  );
  saveContacts(newContacts);
};
const updateContact = (newContact) => {
  const contacts = loadContact();

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase !== newContact.oldName.toLowerCase()
  );

  delete newContact.oldName;
  filteredContacts.push(newContact);

  saveContacts(filteredContacts);
};

module.exports = {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
  updateContact,
};
