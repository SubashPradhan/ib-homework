const groupAdultsByAgeRange = (persons) => {
    if (persons.length === 0) {
        return {}
    }

    const ageAbove18 = persons.filter((person) => {
        if (person.age >= 18) {
            return true
        }
    })

    const ageGroup = {
        '20 and younger': [],
        '21-30': [],
        '31-40': [],
        '41-50': [],
        '51 and older': []

    }

    ageAbove18.reduce((group, currentPerson) => {
        if (currentPerson.age < 21) {
            ageGroup['20 and younger'].push(currentPerson);
        } else if (currentPerson.age >= 21 && currentPerson.age < 31) {
            ageGroup['21-30'].push(currentPerson);
        } else if (currentPerson.age >= 31 && currentPerson.age < 41) {
            ageGroup['31-40'].push(currentPerson);
        } else if (currentPerson.age >= 41 && currentPerson.age < 51) {
            ageGroup['41-50'].push(currentPerson);
        } else if (currentPerson.age >= 51) {
            ageGroup['51 and older'].push(currentPerson);
        }
        return group
    }, {

        })

    const result = {};
    if (ageGroup['20 and younger'].length !== 0) {
        result['20 and younger'] = ageGroup['20 and younger']
    }
    if (ageGroup['21-30'].length !== 0) {
        result['21-30'] = ageGroup['21-30']
    }
    if (ageGroup['31-40'].length !== 0) {
        result['31-40'] = ageGroup['31-40']
    }
    if (ageGroup['41-50'].length !== 0) {
        result['41-50'] = ageGroup['41-50']
    }
    if (ageGroup['51 and older'].length !== 0) {
        result['51 and older'] = ageGroup['51 and older']
    }
    return result;
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;
