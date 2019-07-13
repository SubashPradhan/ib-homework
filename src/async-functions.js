
// resolve with only arrays of url for the resident of tatooline residents
const getTatooineResidents = () => {
    const superagent = require('superagent')
    return superagent
        .get('https://swapi.co/api/planets/1/')
        .then(res => res.body.residents)
        .catch(error => `Please Try again later !!! ${error.message}`)

}

// Creating new Promise that checks the string validation
const promiseMeAString = (checkIfIsString) => {
    return new Promise((resolve, reject) => {
        if (typeof checkIfIsString === 'string') {
            resolve('You kept the Promise!')
        } else if (typeof checkIfIsString === null) {
            reject('You have failed me!')
        }
    })
}

setTimeout(promiseMeAString, 1000) // trying to set timeout for last error


module.exports = {
    getTatooineResidents,
    promiseMeAString
}