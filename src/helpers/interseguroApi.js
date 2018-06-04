import axios from 'axios'
const interseguroUrl = 'https://testsoat.interseguro.com.pe/talentfestapi'

export function getDestination() {
  return axios.get(interseguroUrl+'/destinos').then(response => {
    const {
      data
    } = response,
    destinationList = []
    for (let destination in data) {
      destinationList.push({
        name: data[destination]
      })
    }
    return destinationList
  }).catch(e => {
    console.log(e);
  })
}

export function ajaxFindPlace(query) {
  return new Promise((resolve, reject) => {
    getDestination().then(res => {
      setTimeout(() => {
        const results = res.filter((element, index, array) => {
          return element.name.toLowerCase().includes(query.toLowerCase())
        });
        resolve(results)
      }, 1000)
    });
  })
}
const proxy = 'https://cors-anywhere.herokuapp.com/';
export function getQuotation(destino,fecha_partida,fecha_retorno,cantidad_pasajeros) {
  return axios.post(proxy + interseguroUrl +'/cotizacion', {
    destino: destino,
    fecha_partida: fecha_partida,
    fecha_retorno: fecha_retorno,
    cantidad_pasajeros: cantidad_pasajeros
  })
  .then((response) => {
    let envio = response.data;
    return envio
  }).catch(function (error) {
    console.log(error);
  });
}
