import test from 'ava'
import studyMarking201709 from '../index'

const sm = new studyMarking201709();

// ----------------------------------------
// isAvailable

test('sm#isAvailable should return true if the value "1+1=?" is passed', t => {
    t.true(sm.isAvailable("1+1=?"));
});

test('sm#isAvailable should return false if the value "1+1" is passed', t => {
    t.false(sm.isAvailable("1+1"));
});

// ----------------------------------------
// extract

test('sm#extract should return "1+1" if the value "1+1=?" is passed', t => {
    t.deepEqual(sm.extract("1+2+3=?"), '1+2+3');
});

test('sm#extract should return "1+2" if the value "1+2+3" is passed', t => {
    t.deepEqual(sm.extract("1+2+3"), '1+2');
});

test('sm#extract should return "" if the value "1" is passed', t => {
    t.deepEqual(sm.extract("1"), '');
});

test('sm#extract should return "" if the value "12" is passed', t => {
    t.deepEqual(sm.extract("12"), '');
});

// ----------------------------------------
// evalExpression

test('sm#evalExpression should return 6 if the value "1+2+3" is passed', t => {
  t.deepEqual(sm.evalExpression("1+2+3"), 6);
});

test('sm#evalExpression should return 7 if the value "1+2*3" is passed', t => {
  t.deepEqual(sm.evalExpression("1+2*3"), 7);
});

test('sm#evalExpression should return 9 if the value "(1+2)*3" is passed', t => {
  t.deepEqual(sm.evalExpression("(1+2)*3"), 9);
});

test('sm#evalExpression should return -3 if the value "(1-2)*3" is passed', t => {
  t.deepEqual(sm.evalExpression("(1-2)*3"), -3);
});

test('sm#evalExpression should return NaN if the value "0/0" is passed', t => {
  t.deepEqual(sm.evalExpression("0/0"), NaN);
});

// ----------------------------------------
