const axios = require('axios');

const getClima = async(nombre, lat, lng) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=67ae306bcc9a75e368dca09838174bd6&units=metric`)

    if (!resp.data) {
        throw new Error(`No se pudo determinar el clima de ${nombre}`)
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}