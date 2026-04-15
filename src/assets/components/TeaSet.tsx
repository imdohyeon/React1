/* 의도하지 않은 사이드 이펙트 */
// let guest = 0;

// function Cup() {
//     // 컴포넌트 외부의 guest 변수를 변경
//     guest = guest + 1;
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup/>
//             <Cup />
//             <Cup />
//         </>
//     );
// }

/* 올바른 예시 (1) */

// function Cup({guest}) {
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup guest = {1}/>
//             <Cup guest = {2}/>
//             <Cup guest = {3}/>
//         </>
//     );
// }

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