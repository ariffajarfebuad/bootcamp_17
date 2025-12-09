const fs = require("fs");
const validator = require("validator");

// Folder & File
const dirPath = "./data";
if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, "[]", "utf-8");

// Load Contacts
const loadContacts = () => {
  const file = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(file);
};

// Save Contact
const saveContact = (name, email, mobile) => {
  const contacts = loadContacts();
  const contact = { name, email, mobile };

  // Duplicate name
  const duplicate = contacts.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  if (duplicate) {
    console.log("Name already exists, use another!");
    return false;
  }

  // Email validation
  if (email && !validator.isEmail(email)) {
    console.log("Email is not valid!");
    return false;
  }

  // Mobile validation
  if (!validator.isMobilePhone(mobile, "id-ID")) {
    console.log("Mobile number is not valid!");
    return false;
  }

  contacts.push(contact);
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
  console.log("Contact saved successfully!");
};

// List Contacts
const listContact = () => {
  const contacts = loadContacts();
  console.log("Contact List:");
  contacts.forEach((contact, i) => {
    console.log(
      `${i + 1}. ${contact.name} - ${contact.mobile} (${contact.email})`
    );
  });
};

// Detail Contact
const detailContact = (name) => {
  const contacts = loadContacts();
  const contact = contacts.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  if (!contact) {
    console.log("Contact not found!");
    return;
  }

  console.log("Contact Detail:");
  console.log(`Name   : ${contact.name}`);
  console.log(`Mobile : ${contact.mobile}`);
  if (contact.email) console.log(`Email  : ${contact.email}`);
};

// Delete Contact
const deleteContact = (name) => {
  const contacts = loadContacts();
  const filtered = contacts.filter(
    (c) => c.name.toLowerCase() !== name.toLowerCase()
  );

  if (contacts.length === filtered.length) {
    console.log("Contact not found!");
    return;
  }

  fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2));
  console.log("Contact deleted!");
};

// Export all functions
module.exports = {
  saveContact,
  listContact,
  detailContact,
  deleteContact,
};
