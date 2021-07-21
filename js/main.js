//1. chiedi all’utente il cognome

var lastName = prompt('Scrivi il tuo cognome');
console.log(lastName);
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var lastNameList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

console.log(lastNameList);

var lastNameEdited = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

lastNameList.push(lastName);

console.log(lastNameList);
//3. stampa la lista ordinata alfabeticamente

lastNameList.sort();

console.log(lastNameList);

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var lastNameIndex = lastNameList.indexOf();

lastNameIndex = lastNameList +1

console.log(lastNameIndex)
