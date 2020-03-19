const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let count = num;
        let newString = '';
        while (count) {
            newString += string;
            count--;
        }
        return newString;
    }
}

module.exports = repeatString
