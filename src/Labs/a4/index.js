import React from "react"
// import Add from "./Add";
// import ClickEvent from "./ClickEvent"
// import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
function Assignment4() {
    const sayHello = () => alert("Hello")
    return (
        <div>
            <h1>Assignment 4</h1>
            <PassingFunctions theFunction={sayHello} />
            {/* <Add a={1} b={2} />
            <ClickEvent/>
            <PassingDataOnEvent /> */}
            <EventObject />
        </div>
    );
}
export default Assignment4