const fs = require('fs')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')

function listContacts () {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    const contactsList = JSON.parse(data.toString())
    console.table(contactsList)
  })
}

function getContactById (contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    const contactList = JSON.parse(data.toString())

    const contact = contactList.filter(contact => contact.id === contactId)
    console.log(contact)
  })
}

function removeContact (contactId) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    const contactList = JSON.parse(data.toString())

    contactList.forEach(function (contact, i) {
      if (contact.id === contactId) {
        contactList.splice(i, 1)
      }
    })
    console.log(contactList)
  })
}

function addContact (name, email, phone) {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err.message)
      return
    }
    const contactList = JSON.parse(data.toString())

    const id = contactList.length + 1

    const newContact = {
      id: id,
      name: name,
      email: email,
      phone: phone
    }

    contactList.push(newContact)

    console.log(contactList)
  })
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact
}
