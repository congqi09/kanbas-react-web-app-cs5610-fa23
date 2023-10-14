import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables"
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import WorkingWithArrays from "./WorkingWithArrays";
import JsonStringify from "./JsonStringify";
import TemplateLiterals from "./TemplateLiterals";
import Destructing from "./Destructing";
import House from "./House";
import Spread from "./Spread";
import FunctionDestructing from "./FunctionDestructing";
function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            {/* <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator /> */}
            <WorkingWithFunctions />
            <WorkingWithArrays />
            <JsonStringify />
            <House />
            <TemplateLiterals />
            <Spread />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}

export default JavaScript