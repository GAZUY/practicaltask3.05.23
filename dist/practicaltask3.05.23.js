//Задания, в которых необходимо использовать WHILE.
var number_of_repetitions = +prompt('Введите число повторений #');
var quantity = 1;
while (quantity <= number_of_repetitions) {
    quantity += 1;
    document.write('#');
    alert('#');
}
var end_of_the_range = +prompt('Введите число окончания диапазона');
while (end_of_the_range >= 0) {
    document.write(' ' + end_of_the_range + ' ');
    alert(end_of_the_range);
    end_of_the_range--;
}
var raise_to_a_degree = +prompt('Введите число для возведения в степень');
var degree = +prompt('Введите степень для вычислений');
var exponentiation = raise_to_a_degree;
if (degree == 0) {
    exponentiation = 1;
}
else if (degree == 1) {
    exponentiation = raise_to_a_degree;
}
else {
    while (degree >= 2) {
        exponentiation = exponentiation * raise_to_a_degree;
        degree--;
    }
}
document.write(' ' + exponentiation + ' ');
var the_first_divisible_number = +prompt('Введите первое число для нахождения делителей');
var the_second_divisible_number = +prompt('Введите второе число для нахождения делителей');
if (the_first_divisible_number >= the_second_divisible_number) {
    var divider = the_second_divisible_number;
    while (divider > 0) {
        if ((the_first_divisible_number % divider == 0) && (the_second_divisible_number % divider == 0)) {
            document.write(' ' + divider + ' ');
        }
        divider--;
    }
}
else if (the_first_divisible_number <= the_second_divisible_number) {
    var divider = the_first_divisible_number;
    while (divider > 0) {
        if ((the_first_divisible_number % divider == 0) && (the_second_divisible_number % divider == 0)) {
            document.write(' ' + divider + ' ');
        }
        divider--;
    }
}
else {
    alert('ERROR');
}
var range_boundary = +prompt('введите число, факториал которого нужно найти');
var factorial_of_a_number = 1;
while (range_boundary > 0) {
    factorial_of_a_number = factorial_of_a_number * range_boundary;
    range_boundary--;
}
document.write(' ' + factorial_of_a_number + ' ');
//Задания, в которых необходимо использовать DO WHILE.
do {
    var response_example = +prompt('введите ответ для примера : 2+2*2');
    // @ts-ignore
} while (response_example != 6);
var number_of_divisions = 0;
var the_resulting_number = 1000;
do {
    the_resulting_number = the_resulting_number / 2;
    number_of_divisions++;
} while (the_resulting_number >= 50);
document.write('чтобы получить ' + the_resulting_number + ', надо тысячу разделить на два  ' + number_of_divisions + ' раз');
//Задания, в которых необходимо использовать FOR.
var the_specified_number = +prompt('введите число для определения кратных ему чисел от 1 до 100');
var numerical_series = 1;
for (numerical_series = 1; numerical_series <= 100; numerical_series++) {
    if (numerical_series % the_specified_number == 0) {
        document.write(' ' + numerical_series + ' ');
    }
    else {
        continue;
    }
}
var minimum_range_value = +prompt('укажите начальное значение диапазона');
var maximum_range_value = +prompt('укажите конечное значение диапазона');
for (minimum_range_value = minimum_range_value + 3; minimum_range_value <= maximum_range_value; minimum_range_value += 4) {
    document.write(' ' + minimum_range_value + ' ');
}
var prime_number = +prompt('введите число для проверки: простое или нет');
for (var i = 2; i <= prime_number; i++) {
    if ((i != prime_number) && (prime_number % i == 0)) {
        document.write('число составное');
        break;
    }
    else if ((prime_number % i == 0) && (prime_number == i)) {
        document.write('число простое');
    }
}
