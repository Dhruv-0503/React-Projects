import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [input,setInput] = useState('');

    const handleclick = (val) =>{
        if(val === 'C'){
            setInput('');
        }
        else if(val === '<'){
            setInput(input.slice(0,-1));
        }
        else if(val === '='){
            setInput((eval(input).toFixed(2)).toString());
        }
        else{
            setInput((prevalue) => prevalue + val)
        }
    }
  return (
    <div className='app-container'>
        <div className="app-output">
            <h2>{input}</h2>
        </div>
        <div className="app-input">
            <div className="app-buttons">
                <button onClick={()=>{handleclick('C')}}>C</button>
                <button onClick={()=>{handleclick('<')}}>&lt;</button>
                <button onClick={()=>{handleclick('%')}}>%</button>
                <button onClick={()=>{handleclick('/')}}>/</button>
                <button onClick={()=>{handleclick('7')}}>7</button>
                <button onClick={()=>{handleclick('8')}}>8</button>
                <button onClick={()=>{handleclick('9')}}>9</button>
                <button onClick={()=>{handleclick('*')}}>*</button>
                <button onClick={()=>{handleclick('6')}}>6</button>
                <button onClick={()=>{handleclick('5')}}>5</button>
                <button onClick={()=>{handleclick('4')}}>4</button>
                <button onClick={()=>{handleclick('-')}}>-</button>
                <button onClick={()=>{handleclick('3')}}>3</button>
                <button onClick={()=>{handleclick('2')}}>2</button>
                <button onClick={()=>{handleclick('1')}}>1</button>
                <button onClick={()=>{handleclick('+')}}>+</button>
                <button onClick={()=>{handleclick('0')}}>0</button>
                <button onClick={()=>{handleclick('00')}}>00</button>
                <button onClick={()=>{handleclick('.')}}>.</button>
                <button onClick={()=>{handleclick('=')}}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator
