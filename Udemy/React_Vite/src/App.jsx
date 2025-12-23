import React from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const onClickButton = () => alert();

    const contentStyleB = {
        color: "green",
        fontSize: "18px"
    };
    
    return (
        // <>
        <React.Fragment>
            <h1 style = {{ color: "red" }}>こんにちは</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です!</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
        </React.Fragment>
        // </>
    );
};