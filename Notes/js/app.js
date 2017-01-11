
window.addEventListener('load', function() {
    let email = new RegExp('^[a-zA-Z0-9\\.]{0,15}@[a-zA-Z0-9\\.]+\\.[a-z]{2,3}$');

    let textbox = document.querySelector("#email");
    textbox.addEventListener('keyup', function () {
        console.log('type type');
        if (email.test(textbox.value) === true) {
            textbox.classList.add('valid');
            textbox.classList.remove('invalid');
        } else {
            textbox.classList.add('invalid');
            textbox.classList.remove('valid');
        }
    });
});

/**
 * Regular Expressions:
 * 
 * Finding patterns in strings.
 * 
 *  ^ start of a strings
 * 
 *  $ end of a strings
 * 
 *  [] character set
 * 
 *  () match group
 * 
 *  + one or more
 * 
 *  * zero or more
 * 
 *  ? either zero or one
 * 
 *  {5} exactly 5
 * 
 *  {3,5} between three and five
 * 
 * \w equals [A-Za-z0-9 ]+
 */