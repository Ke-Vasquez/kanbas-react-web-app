import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoop from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockedScoped = 5;
    const constant1 = functionScoped - blockedScoped;
    let numbersArray = [1,2,3,4,5];
    let stringArray = ['string1', 'string2'];
    let variableArray = [functionScoped, blockedScoped, constant1, numbersArray, stringArray];
    console.log('Working With Arrays');
    console.log(functionScoped)
    console.log(blockedScoped)
    console.log(constant1)
    console.log(numbersArray);
    console.log(stringArray);
    console.log(variableArray);
    return(
        <div>
            <h2>Working With Arrays </h2>
            numbersArray1 = {numbersArray} <br/>
            stringArray1 = {stringArray} <br/>
            variableArray1 = {variableArray}
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoop/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays;