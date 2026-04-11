# 202230120 왕도현

## 4월 08일 (6주차)

## 조건부 렌더링
조건에 따라 다른 항목을 표시(렌더링)하는 것

---

## 1️. 삼항 연산자

- **기본 문법:** `isPacked ? true : false`
- `Items` 컴포넌트에서 부모 컴포넌트에 전달받은 데이터 꾸러미(`name`)를 보여줌
- `isPacked`가 `true`일 경우 `☑️`를 나타내고, `false`이면 아무것도 표현하지 않음
- `isPacked = {0}`일 경우에는 자바스크립트에서 0이 거짓으로 평가되지만 반환값 자체가 0이 되므로 화면에 0이 출력됨
- Items 컴포넌트에서 name과 isPacked를 props로 받음
- isPacked가 true라면 del 태그를 통해 텍스트에 취소선을 나타냄

---

### 전체 코드

```jsx

// 자식 컴포넌트 (Items)
export function Items({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked ? "☑️" : ""}
    </li>
  );
}

// 부모 컴포넌트 (PackingList)
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


// 자식 컴포넌트 (Items)
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


// 부모 컴포넌트 (PackingList)
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
