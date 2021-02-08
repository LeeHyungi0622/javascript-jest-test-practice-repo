const sum = require('../sum')

// test() argument1: "string messgae"
// test() argument2: callback function
test('properly adds two numbers', () => {
    // expected result
    // expect([test function])
    // toBe(expected result)
    expect(sum(1, 2)).toBe(3)
})