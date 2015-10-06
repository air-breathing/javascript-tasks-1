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
    switch (romanDigit)
        {
            case 'I':
                return [' %%% ',
                        '  %  ',
                        '  %  ',
                        '  %  ',
                        ' %%% '];
            case 'V':
                return [' %%%   %%% ',
                        '  %     %  ',
                        '   %   %   ',
                        '    % %    ',
                        '     %     '];
            case 'L':
                return [' %%%    ',
                        '  %     ',
                        '  %     ',
                        '  %   %  ',
                        ' %%%%%% '];
            case 'X':
                return [' %% %% ',
                        '  % %  ',
                        '   %   ',
                        '  % %  ',
                        ' %% %% '];
            case 'n':
                return [' % %%   %   %  %  %   %%%  ',
                        ' %%  %  %   %  %  %  %   % ',
                        ' %   %  %   %  %  %  %   % ',
                        ' %   %  %  %%  %  %  %  %% ',
                        ' %   %   %% %  %  %   %% % '];
            default:
                console.error('Error in args of function');
        }
}

/**
 * Возвращает массив 5 строк, изображающие две точки в ASCII.
 *
 * @returns {string[]}
 */
function getPointsLines()
{
    return[' %% ',
           ' %% ',
           '    ',
           ' %% ',
           ' %% '];
}

/**
 * Принимает два римсих числа и печатает их.
 *
 * @param {string} hours
 * @param {string} minutes
 */
function printBeautyRomanTime(hours, minutes)
{

    result = ['', '', '', '', ''];
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
       result = addNewDigitInRes(getBeautyRomanDigit(hours[i]), result);
    }
    result = addNewDigitInRes(getPointsLines(), result);
    for (var i=0; i < minutes.length; i++)
    {
        result = addNewDigitInRes(getBeautyRomanDigit(minutes[i]), result);
    }
    for (var i = 0; i < result.length; i++)
    {
        console.log(result[i]);
    }
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
    for (var j = 0; j < result.length; j++)
    {
        result[j] += digit[j];
    }
    return result;
}

/**
 * Проверка колличества аргументов, поданных программе.
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
 * Проверка диапозона числа, в котором часы.
 *
 * @param {number} hours
 * @returns {boolean}
 */
function checkHours(hours)
{
    return (hours >= 0 && hours <= 23)
}

function printHelp()
{
    console.log('roman-time first_number second_number');
    console.log('   where: first_digit <- [0, 23]');
    console.log('   where: second_digit <- [0, 59]');
}


/**
 * Проверка диапозона числа, в котором минуты.
 *
 * @param {number} minutes
 * @returns {boolean}
 */
function checkMinutes(minutes)
{
    return (minutes >= 0 && minutes <= 59)
}

var hours = process.argv[2];
var minutes = process.argv[3];

checkCode = checkCorrectOfArgs(process.argv);

if (checkCode == 0)
{
    if (checkHours(hours) && checkMinutes(minutes))
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
