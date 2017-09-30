'use strict';

let assert = require('chai').assert;
let expect = require('chai').expect;
let should = require('chai').should();

let Calculator = require('../src');
let calc = new Calculator;

describe('Calculator', () => {

  it('0 by default', () => {
    calc.add('').should.equal(0);
  });

  it('",1,2,0" -> 3', () => {
    calc.add(',1,2,0').should.equal(3);
  });

  it('",,,,,," -> 0', () => {
    calc.add(',,,,,,').should.equal(0);
  });

  it('"1,1,1,1,1,1,1" -> 7', () => {
    calc.add('1,1,1,1,1,1,1').should.equal(7);
  });


  it('"1\n2,3" -> 6', () => {
    calc.add('1\n2,3').should.equal(6);
  });

  it('"1,\n" -> -1', () => {
    calc.add('1,\n').should.equal(-1);
  });

  it('"//<;>\n1;2" -> 3', () => {
    calc.add('//<;>\n1;2').should.equal(3);
  });

  it('"-1" -> "Отрицательные числа не допустимы"', () => {
    calc.add('-1').should.equal("Отрицательные числа не допустимы -1");
  });

  it('"//<;>\n1;2;-1;-100" -> Отрицательные числа не допустимы -1,-100', () => {
    calc.add('//<;>\n1;2;-1;-100').should.equal("Отрицательные числа не допустимы -1,-100");
  });



});
