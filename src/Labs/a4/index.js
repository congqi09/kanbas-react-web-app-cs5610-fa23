import React from "react"
import ReduxExamples from "./ReduxExamples"
import TodoList from "./ReduxExamples/todos/TodoList"
// import Add from "./Add";
// import ClickEvent from "./ClickEvent"
// import PassingDataOnEvent from "./PassingDataOnEvent";
// import PassingFunctions from "./PassingFunctions";
// import EventObject from "./EventObject";
// import Counter from "./Counter";
// import BooleanStateVariables from "./BooleanStateVariables";
// import StringStateVariables from "./StringStateVariables";
// import DateStateVariable from "./DateStateVariable";
// import ObjectStateVariable from "./ObjectStateVariable";
// import ArrayStateVariable from "./ArrayStateVariable";
// import ParentStateComponent from "./ParentStateComponent";
function Assignment4() {
    // const sayHello = () => alert("Hello")
    // return (
    //     <div>
    //         <h1>Assignment 4</h1>
    //         <PassingFunctions theFunction={sayHello} />
    //         {/* <Add a={1} b={2} /><ClickEvent/><PassingDataOnEvent /> */}
    //         <EventObject />
    //         <Counter />
    //         <BooleanStateVariables />
    //         <StringStateVariables />
    //         <DateStateVariable />
    //         <ObjectStateVariable />
    //         <ArrayStateVariable />
    //         <ParentStateComponent />
    //     </div>
    // )
    return (
        <>
            <h1>Assignment4</h1>
            <ReduxExamples />
            <TodoList />
        </>
    )
}
export default Assignment4