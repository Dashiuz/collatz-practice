import _ from "lodash";

const constant_variable = 2;
let number1 = 2;
let number2 = 7;

/** Test a single number. */
const single_number = (num) => {
  let single_results_array = [];

  while (num !== 1) {
    let remainder = num % constant_variable;

    remainder === 0 ? (num = num / 2) : (num = 3 * num + 1);

    single_results_array.push(num);
  }
  return single_results_array;
};

/** Test a range of numbers. */
const range_of_numbers = (num1, num2 = 0) => {
  if (num2 === 0) {
    console.log(
      "second number was 0 | we're going to operate with a single number..."
    );

    const result = single_number(num1);

    console.log(result);

    return result;
  } else {
    console.log(
      "second number was greater than 0 | we're going to operate with a range of numbers..."
    );

    let range_results_array = [];
    const numbers_range = _.range(num1, num2 + 1);

    for (const num of numbers_range) {
      console.time("single_number function");
      let res = single_number(num);
      console.timeEnd("single_number function");
      range_results_array.push(res);
    }

    console.log(range_results_array);
    return range_results_array;
  }
};

range_of_numbers(number1, number2);
