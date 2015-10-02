"use strict";

var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3], 10);

if (hours < 0 || hours > 23) {
    console.log('Время указано не верно. Вы указали ' + hours + ' часов. Но диапазон часов от 0 до 23');
} else if (minutes < 0 && minutes > 60) {
    console.log('Время указано не верно. Вы указали ' + minutes + ' минут. Но диапазон часов от 0 до 59');
} else {
    var romanHours = convertToRoman(hours);
    var romanMinutes = convertToRoman(minutes);
    var romanTime = romanHours + ':' + romanMinutes;

    console.log(romanTime);
    drawRomanTime(romanTime);
}

function convertToRoman(arabicValue) {
    if (arabicValue == 0) {
        return 'N';
    }
    var romanValue = '';
        if (arabicValue >= 50) {
        romanValue += 'L';
        arabicValue -= 50;
    }
    if (arabicValue >= 40) {
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
    var len = romanTime.length;
    for (var i = 0; i < 5; i++) {
        var string = '';
        for (var j = 0; j < len; j++) {
            string += getRomanSign(romanTime[j], i);
        }
        console.log(string + '\n');
    }

}

function getRomanSign(sign, count) {
    var signs = {'I': [' XXX ',
                       '  X  ',
                       '  X  ',
                       '  X  ',
                       ' XXX '],
                 'V': [' X       X ',
                       '  X     X  ',
                       '   X   X   ',
                       '    X X    ',
                       '     X     '],
                 'X': [' X   X ',
                       '  X X  ',
                       '   X   ',
                       '  X X  ',
                       ' X   X '],
                 'L': [' X     ',
                       ' X     ',
                       ' X     ',
                       ' X     ',
                       ' XXXXX '],
                 ':': ['   ',
                       ' X ',
                       '   ',
                       ' X ',
                       '   '],
                 'N': [' X     X ',
                       ' X X   X ',
                       ' X  X  X ',
                       ' X   X X ',
                       ' X     X ']
                 };
    return signs[sign][count];
}
