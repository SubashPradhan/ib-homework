const getTatooineResidents = () => {
const superagent = require('superagent')
    return superagent
    .get('https://swapi.co/api/planets/1/')
    
}










module.exports = {   
    getTatooineResidents,
    promiseMeAString
    }