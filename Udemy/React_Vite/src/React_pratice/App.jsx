import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    console.log("--App--");
    const [num, setNum] = useState(0);
    const [isShowFace, setIsShowFace] = useState(false);

    const onClickCountup = () => {
        setNum((prev) => prev + 1);
        // setNum(num + 1);

    };
    
    const onClickToggle = () => {
        setIsShowFace(!isShowFace);
    };
    
    useEffect(() => {
        if (num > 0){
        if (num % 3 === 0){
            isShowFace || setIsShowFace(true);
        }else{
            isShowFace && setIsShowFace(false);
        }
    }
    }, [num]);

    return (
        // <React.Fragment>
        <>
            <h1 style = {{ color: "red" }}>こんにちは</h1>
            <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
            <ColorfulMessage color="green">元気です!</ColorfulMessage>
            <button onClick={onClickCountup}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowFace && <p>(^_^)</p>}
        </>
        // </React.Fragment>
    );
};