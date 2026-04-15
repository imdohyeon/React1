# 202230120 왕도현

## 04월 15일 (7주차)

## 1. 리스트 렌더링
여러 개의 데이터를 같은 형식으로 출력하는 것

---

- 자바스크립트의 배열 관련 함수를 사용하고 기능에 맞게 렌더링을 할 수 있음
- filter, map() 함수를 사용하고 기능에 맞게 렌더링을 할 수 있음
- 목록에 있는 데이터를 댓글 목록과 이미지 등의 인터페이스처럼 객체를 표시하고 데이터를 자바스크립트 배열에 저장함

---


## 1-1. 화살표 함수
- 묵시적으로 => 뒤에 있는 식을 반환하기 때문에 return이 필요하지 않음
- => 뒤에 중괄호가 오는 경우에는 return을 명시적으로 작성해야 함

---

## 1-2. key prop
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
            <p> {hero.name}의 배역은 {hero.casting} 입니다 </p>
            {/* <p> {hero.casting}의 파워는 {hero.power} 입니다</p> */}
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
1) 같은 입력값을 넣으면 항상 같은 결과를 반환하는 함수 <br>
2) 외부의 상태를 변경하지 않는(사이드 이펙트가 없는) 함수

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
            <p> 치즈버거 {order}개 / 콜라 {order}개  + (이벤트) 프렌치 프라이 {2 * order}개 </p>
        </section>
    )
}

// Kiosk.jsx
import OrderUp from "./OrderUp";
export default function Kiosk() {
    return (
        <section>
        <h2>치즈버거 세트 메뉴를 주문하세요</h2>
        <p>일반 세트 : </p>
        <OrderUp order = {1} />

        <p> 패밀리 세트 : </p>
        <OrderUp order = {2} />
        <h2> 이용해 주셔서 감사합니다 </h2>
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
- `Items` 컴포넌트에서 name과 isPacked를 props로 받음
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
