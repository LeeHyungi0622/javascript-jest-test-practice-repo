const fn = require("../fn");

test("2 더하기 3은 5야.", () => {
    expect(fn.add(2, 3)).toBe(5);
})

// pass
// primitive type의 데이터를 비교할때는 toBe(), toEqual() 모두 일치한다.
test("2더하기 3은 5야.", () => {
    expect(fn.add(2, 3)).toEqual(5);
})

// fail
// 객체를 비교할때에 toBe()를 쓰면 fail된다. 그 이유는 객체는 참조변수이기 때문에
// 해당 데이터의 참조주소가 서로 다르다.
// test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
//     expect(fn.makeUser("Mike", 30)).toBe({
//         name: "Mike",
//         age: 30,
//     })
// })

/**
 * 객체를 toBe()를 사용해서 비교하게 되면 아래와 같은 메시지를 확인할 수 있다.
 * If it should pass with deep equality, replace "toBe" with "toStrictEqual"
 */

// 객체를 비교할때에는 toEqual()을 사용해서 비교를 한다.
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    })
})

// # toEqual() vs toStrictEqual()
// 깊은 비교를 위해서 toStrictEqual()을 사용한다.

// 객체를 toeEqual()로 비교해도 에러가 안나지만, 아래 코드를 각 각 toEqual()과 toStrictEqual()로
// 비교를 해보면, toEqual()은 통과되지만, toStrictEqual()은 실패하는 것을 알 수 있다. 
// 따라서 toStrictEqual()을 사용해서 객체를 비교해주는 것이 좋다.
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name: "Mike",
        age: 30,
    })
})

/*
test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name: "Mike",
        age: 30,
    })
})
*/

/**
 * toBeNull()
 * toBeUndefined()
 * toBeDefined()
 */
test("null은 null입니다.", () => {
    expect(null).toBeNull();
})

// boolean 값을 판별
// toBeTruthy
// toBeFalsy
test("0은 false입니다.", () => {
    expect(fn.add(1, -1)).toBeFalsy();
})

// 빈 문자열이 아닌, helloworld 문자열을 반환하기 때문에 true를 반환
test("helloworld 문자열은 False가 아닙니다.", () => {
    expect(fn.add('hello', 'world')).not.toBeFalsy();
})

test("helloworld 문자열은 True입니다.", () => {
    expect(fn.add('hello', 'world')).toBeTruthy();
})

// toBeGreaterThan 크다 (초과)
// toBeGreaterThanOrEqual 크거나 같다 (이상)
// toBeLessThan 작다 (미만)
// toBeLessThanOrEqual 작거나 같다 (이하)

// 사용자가 입력한 아이디의 길이를 판별하거나, 
// 업로드 된 파일의 크기가 적당한지 판별할때 사용
test("ID는 10자 이하여야 합니다.", () => {
    const id = 'THE_BLACK';
    expect(id.length).toBeLessThanOrEqual(10);
})

// # javascript에서는 0.1 + 0.2이 0.3가 아니다
// Expected: 0.3
// Received: 0.30000000000000004
// 그 이유는 javascript는 소수점을 정확하게 계산하지 못한다.
// 몇 몇 값은 무한소수로 표현되어 버린다. 
// 컴퓨터는 이진법을 사용하기 때문에 그렇다. 

// 이러한 경우에 사용되는 matcher가 바로
// toBeCloseTo()이다.
/*
test("0.1 더하기 0.2은 0.3이다.", () => {
    expect(fn.add(0.1, 0.2)).toBe(0.3);
})
*/

test("0.1 더하기 0.2은 0.3이다.", () => {
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
})


// # 정규표현식과 toMatch()의 사용
// 정규표현식의 대소문자 구분을 안하기 위해서는 정규표현식 뒤에 i 옵션을 붙인다.
test("Hello World 에 a라는 글자가 있나?", () => {
    expect("Hello World").toMatch(/h/i);
})


// 배열에서 특정 요소가 있는지 확인
// toContain
test("유저 리스트에 Mike가 있나?", () => {
    const user = "Kai";
    const userList = ["Tom", "Jane", "Kai"];
    expect(userList).toContain(user)
})

// 함수실행시 예외가 발생하는 경우
// toThrow()를 사용해서 에러가 발생했는지 확인할 수 있다.
// toThrow()의 인자로 발생한 에러를 비교할 수도 있다.
test("이거 에러 나나요?", () => {
    expect(() => fn.throwErr()).toThrow("xx");
})