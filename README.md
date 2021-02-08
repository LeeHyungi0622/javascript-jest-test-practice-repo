# **실습 내용**

![](./img/210208_jest_logo.png)

1. 프로젝트의 branch 기본 구성은 master, feature branch로 구성한다.

2. README.md 파일의 documentation작업을 제외한 모든 작업은 feature branch를 새로 끊어서 작업을 시작한다.

<br/>

# Basic setting in project

3.  Jest 프레임워크를 활용한 테스트를 위해 간단한 JavaScript 파일들을 추가해준다.
    (Add simple javascript files to do unit test using Jest framework.)

4.  프로젝트에 새로운 npm package를 초기화 시켜준다.
    (Generate project folder without asking any questions.)

    ```bash
    $ npm init -y
    ```

5.  Jest를 developer dependency로 구분해서 설치해준다.

    ```bash
    $ npm i -D jest
    ```

6.  package.json의 test script를 "jest"로 해준다.

    ```bash
    "scripts": {
        "test": "jest"
    },
    ```

7.  기본적으로 Jest에서는 **test** 폴더 아래에 있는 테스트 파일들을 검사하기 때문에 테스트를 하기 위해 작성한 파일들은 **test** 폴더의 아래에 위치시키도록 한다.

    - 작성하는 테스트 파일의 이름은 테스트 하고자 하는 function이 위치한 파일명.test.js 와 같은 형태로 파일명을 지어주도록 한다.

8.  **test code의 기본 작성법** - 작성한 test file에서는 테스트하고자 하는 function을 가진 파일을 import해서 해당 function를 테스트해야 한다.

    ```javascript
    const { test, expect } = require("@jest/globals");
    const sum = require("../sum");

    // 작성한 테스트코드가 무엇을 하는지에 대해서 첫번째 parameter로 작성해준다.
    test("properly adds two numbers", () => {
      // expected result
      expect(sum(1, 2)).toBe(3);
    });
    ```

    테스트하고자 하는 function은 위와 같이 `expect()`에 인자와 함께 넣어주고, 예상되는 값을 `toBe()`의 인자로 넣어서 검사를 하게 된다. toBe() 외에도 다양한 검사 조건이 있다.

9.  Test 결과 확인

    ```bash
    > jest

    PASS  __test__/sum.test.js
    ✓ properly adds two numbers (2 ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        1.844 s
    Ran all test suites.
    ```
