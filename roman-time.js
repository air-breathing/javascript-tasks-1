/**
 * Created by Надежда on 02.10.2015.
 */

/**
 * Функция принимает на вход число, возвращает его римское представление.
 *
 * @param {number} timeInDigits
 * @returns {string}
 */
function getRomanTime(timeInDigits)
{
    var result = '';
    var current = 0;
    var digits = [50, 40, 10, 9, 5, 4, 1];
    var romeDigits = {50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I', 0: 'nulla'};
    if (timeInDigits == 0)
    {
        return (result + romeDigits[0]);
    }
    for (;current < digits.length; current++)
    {
        while(timeInDigits >= digits[current])
        {
            result += romeDigits[digits[current]];
            timeInDigits -= digits[current];
        }
    }
    return result;
}

/**
 * Принимает цифру в римской форме, возвращает массив из семи строк, содержащий ASCII представление буквы.
 *
 * @param {string} romanDigit
 * @returns {string[]}
 */
function getBeautyRomanDigit(romanDigit)
{
    var romanDigitsDict = {
        'I': [' @@@ ',
            '  @  ',
            '  @  ',
            '  @  ',
            ' @@@ '],
        'V': [' @@@   @@@ ',
            '  @     @  ',
            '   @   @   ',
            '    @ @    ',
            '     @     '],
        'L': [' @@@    ',
            '  @     ',
            '  @     ',
            '  @   @ ',
            ' @@@@@@ '],
        'X': [' @@ @@ ',
            '  @ @  ',
            '   @   ',
            '  @ @  ',
            ' @@ @@ '],
        'n': [' @ @@   @   @  @  @   @@@  ',
            ' @@  @  @   @  @  @  @   @ ',
            ' @   @  @   @  @  @  @   @ ',
            ' @   @  @  @@  @  @  @  @@ ',
            ' @   @   @@ @  @  @   @@ @ ']
    }
        return romanDigitsDict[romanDigit];
}

/**
 * Возвращает массив 5 строк, изображающие две точки в ASCII.
 *
 * @returns {string[]}
 */
function getPointsLines()
{
    return[' @@ ',
           ' @@ ',
           '    ',
           ' @@ ',
           ' @@ '];
}

/**
 * Принимает два римсих числа и печатает их.
 *
 * @param {string} hours
 * @param {string} minutes
 */
function printBeautyRomanTime(hours, minutes)
{

    var result = ['', '', '', '', ''];
    if (hours == 'nulla')
    {
        hours = 'n';
    }
    if (minutes == 'nulla')
    {
        minutes = 'n';
    }
    for (var i=0; i < hours.length; i++)
    {
       addNewDigitInRes(getBeautyRomanDigit(hours[i]), result);
    }
    addNewDigitInRes(getPointsLines(), result);
    for (var i=0; i < minutes.length; i++)
    {
        addNewDigitInRes(getBeautyRomanDigit(minutes[i]), result);
    }
    console.log(result.join('\n'));
    /*for (var i = 0; i < result.length; i++)
    {
        console.log(result[i]);
    }*/
}

/**
 * Вспомогательная функция. Добавляет дополнительные данные к результату.
 *
 * digit - римское число в виде массива строк
 * result -  буфер, к которому надо добавить массив.
 *
 * @param {string[]} digit
 * @param {string[]}result
 */
function addNewDigitInRes(digit, result)
{
    for (var j = 0; j < result.length; j++) {
        result[j] += digit[j];
    }
}

/**
 * Проверка колличества аргументов, поданных программе.
 * 0 - количество аргументов четыре
 * 1 - больше четырех
 * -1 - меньше четырех
 *
 * @param args, аргументы командной строки в массиве
 * @returns {number}
 */
function checkCorrectOfArgs(args)
{
    if (args.length > 4)
    {
        return 1;
    }
    else
    {
        if (args.length == 4)
        {
            return 0;
        }
        else
        {
            return -1;
        }
    }
}

/**
 * Возвращает true, если value в диапозоне от min до max включительно.
 *
 * @param {number}value
 * @param {number}min
 * @param {number}max
 * @returns {boolean}
 */
function checkBoundary(value, min, max)
{
    return (value >= min && value <= max);
}


function printHelp()
{
    console.log('roman-time first_number second_number');
    console.log('   where: first_digit <- [0, 23]');
    console.log('   where: second_digit <- [0, 59]');
}


var hours = process.argv[2];
var minutes = process.argv[3];

checkCode = checkCorrectOfArgs(process.argv);

if (checkCode == 0)
{
    if (checkBoundary(hours, 0, 23) && checkBoundary(minutes,0 ,59))
    {
        console.log(getRomanTime(hours), ' : ', getRomanTime(minutes));
        printBeautyRomanTime(getRomanTime(hours), getRomanTime(minutes));
    }
    else
    {
        console.error('You have specified not the correct time');
        printHelp();
    }
}
else
{
    if (checkCode == -1)
    {
        console.error('You have entered too few arguments');
    }
    else
    {
        console.error('You have entered too many arguments');
    }
    printHelp();
}
