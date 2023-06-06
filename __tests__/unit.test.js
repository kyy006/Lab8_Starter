// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

test('isPhoneNumber test 1', () => {
    expect(functions.isPhoneNumber('626-000-0000')).toBe(true);
});
test('isPhoneNumber test 2', () => {
    expect(functions.isPhoneNumber('(626)-111-0000')).toBe(true);
});
test('isPhoneNumber test 3', () => {
    expect(functions.isPhoneNumber('5156')).toBe(false);
});
test('isPhoneNumber test 4', () => {
    expect(functions.isPhoneNumber('111')).toBe(false);
});

test('isEmail test 1', () => {
    expect(functions.isEmail('111@ucsd.edu')).toBe(true);
});
test('isEmail test 2', () => {
    expect(functions.isEmail('111@gmail.com')).toBe(true);
});
test('isEmail test 3', () => {
    expect(functions.isEmail('ladf')).toBe(false);
});
test('isEmail test 4', () => {
    expect(functions.isEmail('333')).toBe(false);
});

test('isStrongPassword test 1', () => {
    expect(functions.isStrongPassword('asdasd')).toBe(true);
});
test('isStrongPassword test 2', () => {
    expect(functions.isStrongPassword('asda')).toBe(true);
});
test('isStrongPassword test 3', () => {
    expect(functions.isStrongPassword('_secret123')).toBe(false);
});
test('isStrongPassword test 4', () => {
    expect(functions.isStrongPassword('!@#test')).toBe(false);
});

test('isDate test 1', () => {
    expect(functions.isDate('05/27/2023')).toBe(true);
});
test('isDate test 2', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});
test('isDate test 3', () => {
    expect(functions.isDate('aaa')).toBe(false);
});
test('isDate test 4', () => {
    expect(functions.isDate('11')).toBe(false);
});

test('isHexColor test 1', () => {
    expect(functions.isHexColor('#123')).toBe(true);
});
test('isHexColor test 2', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});
test('isHexColor test 3', () => {
    expect(functions.isHexColor('#12')).toBe(false);
});
test('isHexColor test 4', () => {
    expect(functions.isHexColor('11')).toBe(false);
});