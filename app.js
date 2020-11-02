const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(direccion) => {
    let { nombre, lat, lng } = await lugar.geTLugarLatLng(direccion);
    let temperatura = await clima.getClima(nombre, lat, lng)

    return `El clima de ${nombre} es de ${temperatura}°`;

}

getInfo(argv.direccion).then(msj => console.log(msj)).catch(err => console.log(err));