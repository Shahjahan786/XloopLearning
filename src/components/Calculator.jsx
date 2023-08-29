import { useState } from "react";
import './Calculator.css'

const { default: AppButton } = require("./AppButton");

function Calculator(){

    const [expression, setExpression] = useState("")

    function onButtonClick(e){
        let inputVal =  e.target.value;
        console.log(inputVal);

        switch(inputVal) {
        
            case "C":
                setExpression("");
                break;
            case "=":

                try{
                    setExpression(eval(expression));
                }catch(e){
                    setExpression("Error!")
                }
                
                break;
            default:
                if(expression === "Error!"){
                    setExpression( e.target.value);
                }else{
                    setExpression( expression + e.target.value);
                }
                
          }

       
    }

    return (<div className="Calc-Buttons">

            <span className="Title">Shahjahan Samoon</span>

            <input type="text" value={expression} className="Text-Input" onChange={()=>{}}/>
        
            <table >
                <tbody>

                <tr>
                    <td><AppButton text = "C" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "+" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "-" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "/" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "*" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                </tr>
             
                <tr>
                <td><AppButton text = "5" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "6" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "7" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "8" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "9" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    

                   
                  
                </tr>
                <tr>
                    <td><AppButton text = "1" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "2" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "3" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "4" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                   
                    <td rowSpan = "2"><AppButton text = "=" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                </tr>
                <tr>
                  
            
                    <td><AppButton text = "0" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "." onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = "(" onButtonClick = {(e)=>onButtonClick(e)}/></td>
                    <td><AppButton text = ")" onButtonClick = {(e)=>onButtonClick(e)}/></td>
        
                </tr>
                </tbody>
               
            </table>
            
         
        
        </div>)
}

export default Calculator