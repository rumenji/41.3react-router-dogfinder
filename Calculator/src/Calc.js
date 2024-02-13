import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

const Calc = () => {
const {func, num1, num2} = useParams();

const [result, setResult] = useState();



useEffect(function runCalculation(){
  const calculate = () => {
    if (func === 'add') setResult(+num1 + +num2)
    if (func === 'subtract') setResult(+num1 - +num2)
    if (func === 'multiply') setResult(+num1 * +num2)
    if (func === 'divide') setResult(+num1 / +num2)
};
calculate();
})

console.log(func, num1, num2, result)
 return (
   <p>Result is: {result}</p>
 )
}

export default Calc;