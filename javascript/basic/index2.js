console.log("javascript tutorial 3");

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact)
console.log(contact.address)
console.log(contact.firstName + contact.lastName)

console.log(typeof(contact));