import yargs from "yargs";

import contactsServices from "./contacts.js";

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contactsServices.listContacts();
        return console.table(allContacts);

      case "get":
        const contactById = await contactsServices.getContactById(id);
        return console.log(contactById);

      case "add":
        const addContact = await contactsServices.addContact(
          name,
          email,
          phone
        );
        return console.log(addContact);

      case "remove":
        const removeContact = await contactsServices.removeContact(id);
        return console.log(removeContact);

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
};

const { argv } = yargs(process.argv.slice(2));

invokeAction(argv);
