# 202230120 왕도현

## 04월 29일 (9주차)

## 1. JSX에 스타일 적용하기

## 1-1. 방법
- 일반 CSS, 인라인 스타일, CSS-in-JS, CSS 프레임워크, CSS Module
- React에서 권장하는 방법: CSS Module

---

## 1-2. 일반 CSS
- HTML에서 CSS를 사용하는 방법과 동일함
- ```style.css``` 파일을 만들어서 정의하고 컴포넌트에서 ```import```한 후 사용함
- 속성명의 이름으로 ```className```을 사용함
- 프로젝트에 빠르게 적용할 수 있음
- 컴포넌트 단위로 관리하기 어렵고, 전역 스코프(global)의 클래스 이름과 충돌 가능성이 있으므로 주의해야 함

---

## 1-3 인라인 스타일
- 유지 보수의 어려움이 있음
- 조건부 스타일에서만 (제한적으로) 사용함
- 속성 이름은 ```camelCase```를 사용함

---

## 1-4 CSS-in-JS
- 자바스크립트 코드 내에서 직접 작성하여 컴포넌트 단위로 스타일을 관리함
- styled-components, emotion, JSS 등
- 장점: 관리와 유지보수 용이, prop를 기반으로 동적(조건부) 스타일 적용에 편리, 클래스명을 자동으로 생성하여 충돌 방지, provider 컴포넌트 전달
- 단점: 런타임 속도가 느려짐 등

---

## 1-5. CSS 프레임워크
- Tailwind CSS (클래스), Bootstrap (컴포넌트), bulma 등
- Tailwind CSS: 클래스를 조합하여 스타일을 적용함
- 빠른 개발과 일관성을 유지할 수 있음
- 클래스의 선언이 길어지기 때문에 문서의 가독성이 떨어짐

---

## 1-6. CSS Module
- 클래스명을 ```_[클래스 이름]-[해쉬값]```의 형태로 자동 변환함
- 고유한 이름의 로컬 스코프를 제공하는 기술
- 컴포넌트 기반의 프레임워크인 React나 vue 등에서 채택 → 충돌 방지, 유지보수 유리
- 컴포넌트 단위로 스타일링 및 재사용 유리
- 빌드 시 고유한 이름으로 변경되기 때문에 충돌의 위험이 없음 (* css: 전역으로 선언, 다른 컴포넌트와 충돌의 위험이 있음)

---

## (1) 규칙
- 파일 이름: ```[컴포넌트 이름].module.css```
- 확장명: ```.module.css```
- 내용은 일반 CSS의 작성법을 사용하고 class 선택자로 스타일을 선언함
- ```Tag``` 선택자를 사용하는 것은 특별한 경우가 아니라면 권장하지 않음
- ```Tag``` 선택자는 CSS Module 빌드 시에 고유한 이름을 할당 받지 않고, 전역으로 사용함
- class 선택자: ```camalCase```
  
---

## (2) 클래스 적용 방법
- Import의 변수명은 ```style```을 사용함
- JSX에서는 class 키워드 대신 ```className```을 사용함
- class 이름은 객체를 사용할 때처럼 ```[변수명].[클래스명]```의 형태로 작성함
- class 이름 전체를 중괄호로 감쌈

---

## (3) 관리 방법 
- 컴포넌트 단위로 ```css```를 작성하여 재사용이 가능함
- 컴포넌트와 같은 디렉토리에 저장하여 관리함 → 일반적으로 사용

---
### ▶ 관련 코드

```jsx
// ButtonCom.jsx

import style from "./ButtonCom.module.css"

export default function ButtonCom() {
    return (
        <>
            <h1 className = {style.title}>Button 컴포넌트</h1>
            <nav className = {style.navBar}>
                <button className = {style.myButton}>버튼 1</button>
                <button className = {style.myButton}>버튼 2</button>
        </>
    )
}
```


```css

.title {
    color: blue;
}

.navBar {
    padding: 15px;
    background-color: gray;
}

button {
    margin-right: 10px;
}
```

## 2. 이벤트와 상호 작용
- 사용자의 입력에 반응해서 업데이트가 되는 요소

## 2-1. 이벤트 응답
- JSX에 이벤트 핸들러 추가
- 클릭, 마우스 호버(hover), 폼 입력의 포커스 등 사용자와의 상호작용에 따라 유발되는 사용자 정의 함수
- ```<button>```과 같은 내장 컴포넌트는 onClick과 같은 내장 브라우저 이벤트를 지원함
- 사용자 정의 컴포넌트의 경우, 핸들러 속성에 원하는 애플리케이션 이름을 지정할 수 있음

---

## 2-2. 이벤트 핸들러 인라인 스타일 정의
- 동일한 결과를 보여줌
- 함수가 아주 짧을 때만 예외적으로 사용함
- 가독성이 떨어지고 재사용 및 모듈화가 되지 않음

---

## 2-3. 이밴드 핸들러 함수 전달
- 함수를 호출하는 것이 아니라 전달하는 것
- 함수의 이름만 prop의 형태로 전달
- 호출한다는 것 = 함수의 이름에 소괄호를 함께 사용함
- 핸들러 함수 이름만 prop로 onClick 이벤트에 전달
- 랜더링 과정 중 클릭이 없어도 함수를 실행할 수 있음
- 이벤트 핸들러를 인라인으로 정의하고 싶다면 익명 함수를 사용함

---

## 04월 15일 (7주차)

## 1. 리스트 렌더링

### 정의 
여러 개의 데이터를 같은 형식으로 출력하는 것

---

- 자바스크립트의 배열 관련 함수를 사용하고 기능에 맞게 렌더링을 할 수 있음
- `filter, map()` 함수를 사용하고 기능에 맞게 렌더링을 할 수 있음
- 목록에 있는 데이터를 댓글 목록과 이미지 등의 인터페이스처럼 객체를 표시하고 데이터를 자바스크립트 배열에 저장함

---


## 1-1. 화살표 함수
- 묵시적으로 `⇒` 뒤에 있는 식을 반환하기 때문에 `return`이 필요하지 않음
- `⇒` 뒤에 중괄호가 오는 경우에는 `return`을 명시적으로 작성해야 함

---

## 1-2. key prop

### 정의
배열 중 어떤 자식 요소인지 확인하는 것

---

- 정렬로 인해 이동, 삽입, 삭제되어도 자식 요소를 구별할 수 있음
- 데이터에 무슨 일이 일어났는지 추론하고 DOM 트리를 올바르게 업데이트를 해야 함
- 즉석해서 생성하는 것이 아니고 배열 안에 포함해야 함
- 프래그먼트 구문으로 전달할 수 없음 (`div` 태그로 그룹화 / `<Fragment>` 컴포넌트를 사용해야 함)

---

### ▶ 관련 코드
```jsx
// HerosData.jsx

export const heroes = [
{id: 0, casting: '스파이더맨', name: '피터 파커', power: 4},
{id: 1, casting: '아이언맨', name: '토니 스타크', power: 5},
{id: 2, casting: '배트맨', name: '브루스 웨인', power: 3},
{id: 3, casting: '슈퍼맨', name: '클라크 켄트', power: 1},
{id: 4, casting: '헐크', name: '로버트 브루스 배너', power: 2}];

// MovieHeros.jsx

import {heroes} from "./HerosData";

export default function MovieHeroes() {
    const filterTests = heroes.filter(hero =>
        hero.power === 5
    );
    const listHeroes = filterTests.map(hero =>
        <li key = {hero.id}>
            <p>{hero.name}의 배역은 {hero.casting} 입니다</p>
            {/* <p>{hero.casting}의 파워는 {hero.power} 입니다</p> */}
        </li>
    );
        return (
        <section>
        <h1>영화 속 영웅들</h1>
        <ul>{listHeroes}</ul>
        </section>
    );
}
```

## 2. 순수 함수

### 정의
① 같은 입력값을 넣으면 항상 같은 결과를 반환하는 함수 <br>
② 외부의 상태를 변경하지 않는 함수 (사이드 이펙트 X)

---

- 컴포넌트로 만들면 사이드 이펙트가 없는 순수한 컴포넌트가 완성됨
- 규모가 점점 커지더라도 예상 밖의 동작이나 버그를 피할 수 있음
- 자신의 일만 집중하고 함수가 호출되기 전에 존재했던 객체나 변수를 변경하지 않음
- 같은 입력이 주어졌다면 같은 결과를 반환함

---
### ▶ 관련 코드
```jsx
// OrderUp.jsx
export default function OrderUp ({order}) {
    return (
        <section>
            <p>치즈버거 {order}개 / 콜라 {order}개  + (이벤트) 프렌치 프라이 {2 * order}개</p>
        </section>
    )
}

// Kiosk.jsx
import OrderUp from "./OrderUp";
export default function Kiosk() {
    return (
        <section>
        <h2>치즈버거 세트 메뉴를 주문하세요</h2>
        <p>일반 세트 :</p>
        <OrderUp order = {1} />

        <p>패밀리 세트 :</p>
        <OrderUp order = {2} />
        <h2>이용해 주셔서 감사합니다</h2>
        </section>
    );
}

```
## 2-1. 특징
- 자신의 일만 집중하고 함수가 호출되기 전에 존재했던 객체나 변수를 변경하지 않음
- 같은 입력이 주어졌다면 같은 결과값을 변환함

---
## 2-2. 지역 변경
- 외부에 있는 기존 변수를 렌더링 중에 변경함 (의도하지 않은 사이드 이펙트)
- 함수 스코프 외부의 변수나 호출 전에 생성된 객체를 변경하지 않음
- 렌더링 하는 동안에 생성된 변수와 객체를 변경하는 것은 문제가 되지 않음

---
### ▶ 관련 코드
```jsx
// TeaSet.tsx

/* 의도하지 않은 사이드 이펙트 */

let guest = 0;
function Cup() {
    // 컴포넌트 외부의 guest 변수를 변경
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
}

 export default function TeaSet() {
    return (
        <>
            <Cup/>
            <Cup />
            <Cup />
        </>
     );
 }

/* 올바른 예시 (1) */

 function Cup({guest}) {
     return <h2>Tea cup for guest #{guest}</h2>;
 }

 export default function TeaSet() {
     return (
         <>
            <Cup guest = {1}/>
            <Cup guest = {2}/>
            <Cup guest = {3}/>
         </>
      );
  }

/* 올바른 예시 (2) */

function Cup({guest}) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }

  return (
    <>
      {cups}
    </>
  );
}

```


## 4월 08일 (6주차)

## 1. 조건부 렌더링
조건에 따라 다른 항목을 표시하는 것

---

## 1-1️. 삼항 연산자

- **기본 문법:** `{isPacked ? true : false}`
- `Items` 컴포넌트에서 부모 컴포넌트에 전달받은 데이터 꾸러미(`name`)를 보여줌
- `isPacked`가 `true`일 경우 `☑️`를 나타내고, `false`이면 아무것도 표현하지 않음
- `isPacked = {0}`일 경우에는 자바스크립트에서 0이 거짓으로 나오지만 반환값 자체가 0이 되므로 화면에 0이 출력됨
- `Items` 컴포넌트에서 name과 isPacked를 `props`로 받음
- 두 번째 자식 컴포넌트에서 isPacked가 true라면 `del` 태그를 통해 텍스트에 취소선을 나타냄


---

### ▶ 관련 코드

```jsx

// 자식 컴포넌트 (Items.tsx)
export function Items({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked ? "☑️" : ""}
    </li>
  );
}

// 부모 컴포넌트 (PackingList.tsx)
export default function PackingList() {
  return (
    <>
      <section>
        <h1>여행 준비 목록</h1>
        <ul>
          <Items name="여분 옷" isPacked={true} />
          <Items name="노트북" />
          <Items name="음료수" isPacked={0} />
        </ul>
      </section>
    </>
  );
}


// 자식 컴포넌트 (Items.tsx)
export function Items({ name, isPacked }) {
  let itemContent = name;
  
  if (isPacked) {
    itemContent = <del>{name + " ☑️"}</del>; // del: 취소선
  }

  return (
    <li>
      {itemContent}
    </li>
  );
}


// 부모 컴포넌트 (PackingList.tsx)
export default function PackingList() {
  return (
    <section>
      <h1>여행 준비 목록</h1>
      <ul>
        <Items name="여분 옷" isPacked={true} />
        <Items name="노트북" />
        <Items name="음료수" isPacked={0} />
      </ul>
    </section>
  );
}
```
