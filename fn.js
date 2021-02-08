const fn = {
    add: (a, b) => (a + b),
    makeUser: (name, age) => ({ name, age, gender: undefined }),
    throwErr: () => {
        throw new Error("xx");
    },
}

module.exports = fn