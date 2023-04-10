function ageClassification(age) {

    // Your code here
    if (typeof age !== 'number') {
        return 'Invalid Input'
    }


    if (age <= 18) {
        return 'Minor';
    } else if (age > 18 && age < 65) {
        return 'Adult';
    } else {
        return 'Senior';
    }

}

console.log(ageClassification('55'))


module.exports = ageClassification