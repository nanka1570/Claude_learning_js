import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountup = () => {
        setNum((prev) => prev + 1);
        setNum(num + 1);

    };

    const contentStyleB = {
        color: "green",
        fontSize: "18px"
    };
    
    return (
        // <React.Fragment>
        <>
            <h1 style = {{ color: "red" }}>こんにちは</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です!</ColorfulMessage>
            <button onClick={onClickCountup}>カウントアップ</button>
            <p>{num}</p>
        </>
        // </React.Fragment>
    );
};