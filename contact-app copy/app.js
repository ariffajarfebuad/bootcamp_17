const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const {
  loadContact,
  findContact,
  addContact,
  checkDuplicate,
  deleteContact,
  updateContact,
} = require("./utility/contacts");
const { body, validationResult, check } = require("express-validator");
const pool = require("./db");

const app = express();
const port = 3001;

// info EJS as view engine
app.set("view engine", "ejs");

//info third party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

// //middle ware use
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// info Route Home
app.get("/", (req, res) => {
  const contact = [
    { name: "arif", mobile: "08123456788", email: "arif@gmail.com" },
    { name: "fajar", mobile: "08123456789", email: "fajar@gmail.com" },
    { name: "febri", mobile: "08123456780", email: "febri@gmail.com" },
  ];

  res.render("index", {
    name: "arif",
    title: "Webserver EJS",
    layout: "layout/main-layouts",
    contact,
  });
});

// info Route About
app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layout/main-layouts",
    title: "About EJS",
  });
});

// info Route Contact
app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    title: "Contact EJS",
    layout: "layout/main-layouts",
    contacts,
  });
});

// info route add contact (tampilkan form tambah kontak)
app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "add contact",
    layout: "layout/main-layouts",
  });
});

// proses insert ke database (POST)
app.post("/contact/add", async (req, res) => {
  try {
    const { name, mobile, email } = req.body;
    await pool.query(
      `INSERT INTO contact (name, mobile, email) VALUES ($1, $2, $3)`,
      [name, mobile, email]
    );
    res.redirect("/contact");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Database error");
  }
});

app.post(
  "/contact",
  [
    body("name").custom((value) => {
      const duplicate = checkDuplicate(value);
      if (duplicate) {
        throw new Error("contact name exist!");
      }
      return true;
    }),

    check("email", "Email not valid").isEmail(),

    check("mobile", "mobilephone is not valid").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("add-contact", {
        layout: "layout/main-layouts",
        title: "add new data form",
        errors: errors.array(),
      });
    } else {
      addContact(req.body);
      res.redirect("/contact");
    }
  }
);

app.get("/contact/delete/:name", (req, res) => {
  const contact = findContact(req.params.name);
  if (!contact) {
    res.status("404");
    res.send("404");
  } else {
    deleteContact(req.params.name);
    res.redirect("/contact");
  }
});

// info route edit contact
app.get("/contact/edit/:name", (req, res) => {
  const contact = findContact(req.params.name);
  res.render("edit-contact", {
    title: "edit form contact",
    layout: "layout/main-layouts",
    contact,
  });
});

// Proses Ubah Data (POST)
app.post(
  "/contact/update",
  [
    // Validator Ubah Kontak: Cek duplikat nama
    body("name").custom((value, { req }) => {
      const duplikat = findContact(value);
      if (value !== req.body.oldNama && duplikat) {
        throw new Error("Nama kontak sudah digunakan!");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("mobile", "Nomor HP tidak valid!").isMobilePhone("id-ID"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("edit-contact", {
        title: "Form Ubah Data Kontak",
        layout: "layout/main-layouts",
        errors: errors.array(),
        contact: req.body,
      });
    }

    updateContact(req.body);
    req.flash("msg", "Data kontak berhasil diubah!");
    res.redirect("/contact");
  }
);

app.get("/contact/:name", (req, res) => {
  const contact = findContact(req.params.name);
  res.render("detail", {
    layout: "layout/main-layouts",
    title: "Detail Contact",
    contact,
  });
});

// // info route detail contact
// app.get("/contact/:name", (req, res) => {
//   const contact = findContact(req.params.name);
//   res.render("detail", {
//     title: "detail contact",
//     layout: "layout/main-layouts",
//     contact,
//   });
// });

// 404 Handler
app.use("/", (req, res) => {
  res.status(404).send("page not found");
});

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port [${port}]`);
});
