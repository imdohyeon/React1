# 202230120 왕도현

## 04월 08일 6주차

1. 조건부 랜더링
     - 정의: 조건에 따라 다른 항목을 표시하는 것
  
             import Items from "./Items";
       
             export default function PackingList () {
             return (
               <>
                <section>
                <h1>여행 준비 목록</h1>
                <ul>
                 <Items name = "여분 옷" isPacked = {true} />
                 <Items name = "노트북"/>
                 <Items name = "음료수" isPacked = {true} />
                </ul>
                </section>
                </>
           )
           }

      -   **{isPacked ? true : false}**
       <br>
         

         export default function Items({name, isPacked}) { 
              return <li>{name} {isPacked? "☑️" : ""}</li>;
              }



            <Items name = "여분 옷" isPacked = {true} />
                <Items name = "노트북"/>
                <Items name = "음료수" isPacked = {0} />

<br>
   
- 조건절 ? 참 : 거짓
- Items 컴포넌트에서 부모 컴포넌트에 전달 받은 데이터 꾸러미(name)을 보여줌
- true일 경우 ☑️를 나타내고 false이면 아무것도 표현하지 않음
- 0일 경우에는 전체 식이 0을 얻게 됨



<img width="890" height="164" alt="image" src="https://github.com/user-attachments/assets/e341a6b3-ef6f-4c08-a878-133beff7fd36" />

<br>




##
    export default function Items ({name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = <del>{name + "☑️"}</del>; // del: 취소선
    }

    return (
        <li>{itemContent}</li>
    )}


  - Items 컴포넌트에서 name과 isPacked를 props를 받음
  - isPacked가 true라면 del을 통해 취소선을 나타냄



<img width="904" height="181" alt="image" src="https://github.com/user-attachments/assets/ecd39b03-c5f9-42f8-9d2c-54e21fd52b9f" />

##
