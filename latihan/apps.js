const express = require("express");
const app = express();

const {
  loadContacts,
  saveContacts,
  findContact,
} = require("./utils/contacts");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

/* =====================
   READ (LIST)
===================== */
app.get("/", (req, res) => {
  const contacts = loadContacts();
  res.render("index", { contacts });
});

/* =====================
   CREATE
===================== */
app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  const contacts = loadContacts();
  contacts.push(req.body);
  saveContacts(contacts);
  res.redirect("/");
});

/* =====================
   READ (DETAIL)
===================== */
app.get("/contact/:name", (req, res) => {
  const contact = findContact(req.params.name);
  res.render("detail", { contact });
});

/* =====================
   UPDATE
===================== */
app.get("/contact/edit/:name", (req, res) => {
  const contact = findContact(req.params.name);
  res.render("edit", { contact });
});

app.post("/contact/update", (req, res) => {
  const contacts = loadContacts();

  const newContacts = contacts.map(contact => {
    if (contact.name === req.body.oldName) {
      return {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      };
    }
    return contact;
  });

  saveContacts(newContacts);
  res.redirect("/");
});

/* =====================
   DELETE
===================== */
app.get("/contact/delete/:name", (req, res) => {
  const contacts = loadContacts();
  const decodedName = decodeURIComponent(req.params.name);

  const newContacts = contacts.filter(
    contact => contact.name !== decodedName
  );

  saveContacts(newContacts);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
