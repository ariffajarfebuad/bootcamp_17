const contacts = require("./contacts.js");

const main = async () => {
  const name = await contacts.question("what is your name? ");
  const mobile = await contacts.question("your mobile number ? ");
  const email = await contacts.question("your email ? ");

  contacts.saveContact(name, mobile, email);
};

main();

// rl.question("what is your name? ", (name) => {
//   rl.question("your number mobile? ", (mobile) => {
//     const contact = { name, mobile };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");
//     const contacts = JSON.parse(file);
//     contacts.push(contact);
//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
//     console.log("terimakasih sudah masukan data");
//     rl.close();
//   });
// });
