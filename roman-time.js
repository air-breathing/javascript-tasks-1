/**
 * Created by Надежда on 02.10.2015.
 */
function getRomanTime(timeInDigits)
/**
 * Функция принимает на вход число, возвращает его римское представление.
 *
 * @param timeInDigits
 * @returns {string}
 */
{
    var result = '';
    var current = 0;
    var digits = [50, 40, 10, 9, 5, 4, 1];
    var romeDigits = {50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};
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

function getBeautyRomanDigit(romanDigit)
/**
 * Принимает цифру в римской форме, возвращает массив из семи строк, содержащий ASCII представление буквы.
 *
 * @param romanDigit
 * @returns {string[]}
 */
{
    switch (romanDigit)
        {
            case 'I':
                return [' %%%% ',
                        '  %%  ',
                        '  %%  ',
                        '  %%  ',
                        '  %%  ',
                        '  %%  ',
                        ' %%%% '];
            case 'V':
                return [' %%%%     %%%% ',
                        '  %%       %%  ',
                        '   %%     %%   ',
                        '    %%   %%    ',
                        '     %% %%     ',
                        '      %%%      ',
                        '       %       '];
            case 'L':
                return [' %%%%        ',
                        '  %%         ',
                        '  %%         ',
                        '  %%         ',
                        '  %%     %%% ',
                        '  %%      %% ',
                        ' %%%%%%%%%%% '];
            case 'X':
                return [' %%%%  %%%% ',
                        '  %%    %%  ',
                        '   %%  %%   ',
                        '    %%%%    ',
                        '   %%  %%   ',
                        '  %%    %%  ',
                        ' %%%%  %%%% '];
            default:
                console.error('Error in args of function');
        }
}

function getPointsLines()
/**
 * Возвращает массив 7 строк, изображающие две точки в ASCII.
 *
 * @returns {string[]}
 */
{
    return['       ',
           '       ',
           '  %%%  ',
           '  %%%  ',
           '       ',
           '  %%%  ',
           '  %%%  '];
}

function printBeautyRomanTime(hours, minutes)
/**
 * Принимает два римсих числа и печатает их.
 *
 * @param hours
 * @param minutes
 */
{

    result = ['', '', '', '', '', '', ''];
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

function addNewDigitInRes(digit, result)
/**
 * Вспомогательная функция. Добавляет дополнительные данные к результату.
 *
 * digit - римское число в виде массива строк
 * result -  буфер, к которому надо добавить массив.
 *
 * @param digit
 * @param result
 */
{
    for (var j = 0; j < result.length; j++)
    {
        result[j] += digit[j];
    }
    return result;
}


function checkCorrectOfArgs(args)
/**
 * Проверка колличества аргументов, поданных программе.
 *
 * @param args
 * @returns {boolean}
 */
{
    if (args.length != 4)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function checkHours(hours)
/**
 * Проверка диапозона числа, в котором часы.
 *
 * @param hours
 * @returns {boolean}
 */

{
    return (hours >= 0 && hours <= 23)
}

function checkMinutes(minutes)
/**
 * Проверка диапозона числа, в котором минуты.
 *
 * @param minutes
 * @returns {boolean}
 */
{
    return (minutes >= 0 && minutes <= 59)
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (checkCorrectOfArgs(process.argv))
{
    if (checkHours(hours) && checkMinutes(minutes))
    {
        console.log(getRomanTime(hours), getRomanTime(minutes));
        printBeautyRomanTime(getRomanTime(hours), getRomanTime(minutes));
    }
    else
    {
        console.error('You have specified not the correct time')
    }
}
else
{
    console.error('You have entered too many arguments')
}
