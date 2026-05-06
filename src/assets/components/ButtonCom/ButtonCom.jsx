import style from "./ButtonCom.module.css"



export default function ButtonCom() {

    function handleClick() {
    alert("버튼 클릭");
    }

    return (
        <>
            <h1 className = {style.title}>Button 컴포넌트</h1>
            <nav className = {style.navBar}>
                <button onClick = {handleClick} className = {style.myButton}>버튼1</button>
                <button onClick = {handleClick} className = {style.myButton}>버튼2</button>
            </nav>

        </>
    )
}