
const name = prompt('Quale è il tuo nome?').toLocaleLowerCase();
const lastName = prompt ('Quale è il tuo cognome?').toLocaleLowerCase();
const color = prompt('Qual è il tuo colore preferito?').toLocaleLowerCase();

const message = `
  Password: ${name}${lastName}${color}23
`;

document.getElementById("output").innerHTML = message;
