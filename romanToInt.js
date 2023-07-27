function romanToInt(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];
        const nextSymbol = roman[i + 1];

        if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
            result -= romanNumerals[currentSymbol];
        } else {
            result += romanNumerals[currentSymbol];
        }
    }

    return result;
}


// console.log(romanToInt('XXI'));