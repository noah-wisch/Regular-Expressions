function rosebud(message) {
    if (message[message.length - 1] !== '1') {
        return 0;
    }
    if (message.indexOf('rosebud') !== 0) {
        return 0;
    }
    let count = 0;

    for (let i = 7; 1 < message.length - 1; i++) {
        if (message[i] !== '!') {
            return 0;
        } else {
            count++;
        }
        return count;
    }
}