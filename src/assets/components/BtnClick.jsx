import { useState } from "react";

export default function BtnClick() {
    const [number, setNumber] = useState(0);

    function handleIncrease1() {
        // setNumber(number + 1);
        setNumber(n => n + 1);
        console.log(number)

        // setNumber(number + 1);
        setNumber(n => n + 1);
        console.log(number)

        // setNumber(number + 1);
        setNumber(n => n + 1);
        console.log(number)
    }

    function handleIncrease2() {
        setNumber(number + 5);
        alert(number);
    }

    function handleTimer() {
        setNumber(number + 5);
        setTimeout(() => {
            alert(number);
        }, 1000);
    }

    return (
        <>
        <h1>{number}</h1>
        <button onClick={handleIncrease1}>+3</button>&nbsp;
        <button onClick={handleIncrease2}>+5</button>&nbsp;
        <button onClick={handleTimer}>Timer</button>&nbsp;
        </>
    )
}