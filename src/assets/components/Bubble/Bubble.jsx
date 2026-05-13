import style from "./Bubble.module.css";

function Button({onClick, children}) {
    return (
        <button className={style.button} onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}




export default function Bubble() {
    return (
        <>
        <h1 className={style.title}>Bubble</h1>
        <nav className={style.navBar} onClick={() => alert("네비게이션 바 클릭!")}> 

            <Button onClick={() => alert("버튼 1 클릭!")}>
                버튼1
            </Button>

            <Button onClick={() => alert("버튼 2 클릭!")}>
                버튼2
            </Button>
        </nav>
        </>
    );
}