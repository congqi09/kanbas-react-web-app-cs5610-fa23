import React from "react"
import Add from "./Add";
import ClickEvent from "./ClickEvent"
import PassingDataOnEvent from "./PassingDataOnEvent";
function Assignment4() {
    return (
        <div>
           <h1>Assignment 4</h1>
           <Add a={1} b={2} />
           <ClickEvent/>
           <PassingDataOnEvent />
        </div>
    );
}
export default Assignment4