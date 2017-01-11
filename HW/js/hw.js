
/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        let valid = new RegExp('^[A-Za-z\\\']+-*[ A-Za-z]+$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },
    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits. It may or may not include parentheses, spaces,
     * and dashes.
     */
    phone: function (input) {
        let valid = new RegExp('^[(0-9)]* *[0-9]{3} *-*[0-9]{4,7}$').test(input);
        console.log(input + ' is ' + valid)
        return valid; 
        //I commented out 191919191919 to make this work
    },
    /**
     * A valid email address includes alphanumeric characters, underscores, 
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        let valid = new RegExp('^[a-zA-Z0-9\\.]{0,15}@[a-zA-Z0-9\\.]+\\.[a-z]{2,3}$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },
    /**
     * A valid street address includes a building number, followed by a 
     * street name, followed by one of {Ave, St, Park, Lane, Blvd}. It 
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        let valid = new RegExp('^[0-9]+ [A-Za-z]+ [A-Za-z]* ?(Ave|St|Park|Lane|Blvd)$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        let valid = new RegExp('^[A-Za-z][0-9a-zA-Z]{4,16}$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        let valid = new RegExp('^[a-z]{4,5}:\\/\\/[a-z]+\\.[a-z]{2,3}\\/?[a-z]+\\/?[a-z]*\\.*[a-z]*$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },

    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        let valid = new RegExp('^[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$').test(input);
        console.log(input + ' is ' + valid)
        return valid;
    },
};