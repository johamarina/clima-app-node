const axios = require('axios');

const geTLugarLatLng = async(direccion) => {
    const encodedUrl = encodeURI(direccion);

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1Ijoiam9oYW1hcmluYSIsImEiOiJja2d6dmZmangwM2ViMnNvdzAzZjBod2o1In0.DcRz_1nLTuvd3pnsiZTtzA`)

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = resp.data.features[0];
    const nombre = data.place_name;
    const lat = data.geometry.coordinates[1];
    const lng = data.geometry.coordinates[0];

    return {
        nombre,
        lat,
        lng
    }
}


module.exports = {
    geTLugarLatLng
}