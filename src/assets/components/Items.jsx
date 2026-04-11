// export default function Items({name, isPacked}) { 
//     return <li>{name} {isPacked? "☑️" : ""}</li>;


// export default function Items({ name, isPacked }) {
//     return (
//     <li>
//       {name} {isPacked ? "☑️" : ""}
//     </li>
//     );
// }


/* 제거 */

    // return (
    //     <li>
    //         {isPacked ? (
    //             <del>
    //                 {name + "☑️"}   
    //             </del>
    //               ): (
    //             name   // 중괄호가 위에 묶여있으므로 중괄호 없음 (위에 있는 name은 del이 연결되어 있으므로 중괄호 등장)
    //              )}
    //             </li>
    //              )


/* 조건부 렌더링 */

export default function Items ({name, isPacked}) {
    let itemContent = name;
    if (isPacked) {
        itemContent = <del>{name + "☑️"}</del>; // del: 취소선
    }

    return (
        <li>{itemContent}</li>
    )
}
