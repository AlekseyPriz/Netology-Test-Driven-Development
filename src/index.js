class Calculator {

  constructor() {
    console.log('Init Calculator');

  }
  add(input) {
    let result;
    let separator = /[,\n]/;
    let answer;

    function isPositive(number) {
      return number => 0;
    }

    function isNegative(number) {
      return number < 0;
    }

    if (input < 0 ) {
      return "Отрицательные числа не допустимы " + input
    }

    if ( /\/\/<.{1}>\n/.test(input)) {
      separator = input[3];
      input = input.slice(6)
    }

    if (/(,\n|n,)/.test(input)) {
      return  -1;
    } else {
      result = input
        .split(separator)
        .map((x) => { return x === "" ? 0 : parseInt(x) });

      if(result.every(isPositive)) {
        answer = result.reduce((x, s) => { return x + s }, 0);
      }

      if (result.some(isNegative)) {
        answer = result.filter((x) => { return x < 0 });
        return 'Отрицательные числа не допустимы ' + answer;
      }
    return answer;
    }
  }
}

module.exports = Calculator;
