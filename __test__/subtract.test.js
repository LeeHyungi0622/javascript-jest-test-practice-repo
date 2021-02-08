const subtract = require('../subtract')

// test() argument1: "string messgae"
// test() argument2: callback function
test('properly subtracting two numbers', () => {
    // expected result
    // expect([test function])
    // toBe(expected result)
    expect(subtract(1, 2)).toBe(-1)
})