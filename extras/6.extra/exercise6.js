//Al siguiente javascript no funciona como deberia...podrias arreglarlo?

//Deberia de imprimir por consola "Peter".

const user = { name: "Peter", surname: "Parker" };

function a(user) {
  const name = user.name;
  const greeting = b(name);
  console.log(greeting);
}

function b(name) {
  return "Hello " + name;
}

a(user); // Output: Hello Peter