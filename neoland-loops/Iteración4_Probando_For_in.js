// Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

const alienObject = (Object) => {

    for (const key in Object) {
        console.log(`${key} : ${Object[key]}`)
    }

}

alienObject(alien);


