const { TestScheduler } = require('jest')
const cloneArray = require('../cloneArray')

test('properly clones array', () => {
    const array = [1, 2, 3]
        // failed
        //이유는 비교하는 두 리스트의 값은 같지만, 
        //두 리스트의 값이 저장되는 메모리상의 주소가 서로 다르기 때문이다.
        // expect(cloneArray(array)).toBe(array)
        //passed   
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})