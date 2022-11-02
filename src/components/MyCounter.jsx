import { useState } from "react";

const MyCounter = (props) => {

    
    //let countState = 77
    const [countState, setCountState] = useState(5)

    function incCount(){
        //countState++
        setCountState(countState + props.incBy)
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default MyCounter;
