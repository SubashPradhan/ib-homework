const groupAdultsByAgeRange = persons => {
    const youngster = 18
    const youngPeopleAbove20 = 30
    const middleAged = 40
    const middleoldAged = 50
    const oldAged = 60
    const ageGroup = {
        'below-18': [],
        '20 and younger': [],
        '31-40':[],
        '51-older':[]

    }

    const storeGroups = (name, age) => {
        const newStorGroup = {
                ageGroup :[{
                age: age,
                name: name
            }]
        }
    }
    return persons.reduce((category, currentPerson) => {
        if (persons.age < youngster) {
            storeGroups['below-18'].push(currentPerson)
            return category(storeGroups)
        }
    }, storeGroups)
}



module.exports = { groupAdultsByAgeRange }