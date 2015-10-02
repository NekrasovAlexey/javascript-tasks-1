var hours = parseInt(process.argv[2]);
var minutes = parseInt(process.argv[3]);

if (hours >= 0 && hours < 24 && minutes >=0 && minutes < 60) {
    var romanHours = convertToRoman(hours);
    var romanMinutes = convertToRoman(minutes);
    var romanTime = romanHours + ':' + romanMinutes;

    console.log(romanTime);
    drawRomanTime(romanTime);
} else {
    console.log('Время указано не верно');
}

function convertToRoman(arabicValue) {
    if (arabicValue == 0) {
        return 'N';
    }

    var romanValue = '';
        if (arabicValue > 49) {
        romanValue += 'L';
        arabicValue %= 50;
    }
    if (arabicValue > 40) {
        romanValue += 'XL';
        arabicValue -= 40;
    }
    while (Math.floor(arabicValue / 10)) {
        romanValue += 'X';
        arabicValue -= 10;
    }
    switch (arabicValue) {
        case 9:
            romanValue += 'IX';
            arabicValue = 0;
            break;
        case 4:
            romanValue += 'IV';
            arabicValue = 0;
            break;
    }
    if (arabicValue > 4) {
        romanValue += 'V';
        arabicValue -= 5;
    }
    while (arabicValue) {
        romanValue += 'I';
        arabicValue -= 1;
    }

    return romanValue;
}

function drawRomanTime(romanTime) {
    var lenght = romanTime.length;
    for (i = 0; i < 5; i++) {
        var string = '';
        for (j = 0; j < lenght; j++) {
            string += getRomanSign(romanTime[j], i);
        }
        console.log(string + '\n');
    }

}

function getRomanSign(sign, count) {
    var signs = {'I': {0: ' XXX ',
                       1: '  X  ',
                       2: '  X  ',
                       3: '  X  ',
                       4: ' XXX '},
                 'V': {0: ' X       X ',
                       1: '  X     X  ',
                       2: '   X   X   ',
                       3: '    X X    ',
                       4: '     X     '},
                 'X': {0: ' X   X ',
                       1: '  X X  ',
                       2: '   X   ',
                       3: '  X X  ',
                       4: ' X   X '},
                 'L': {0: ' X     ',
                       1: ' X     ',
                       2: ' X     ',
                       3: ' X     ',
                       4: ' XXXXX '},
                 ':': {0: '   ',
                       1: ' X ',
                       2: '   ',
                       3: ' X ',
                       4: '   '},
                 'N': {0: ' X     X ',
                       1: ' X X   X ',
                       2: ' X  X  X ',
                       3: ' X   X X ',
                       4: ' X     X '}
                 };
    return signs[sign][count];
}
