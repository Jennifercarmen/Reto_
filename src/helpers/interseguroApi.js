import axios from 'axios'
const interseguroUrl = 'https://testsoat.interseguro.com.pe/talentfestapi/destinos'

export function getDestination() {
  return axios.get(interseguroUrl).then(response => {
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
