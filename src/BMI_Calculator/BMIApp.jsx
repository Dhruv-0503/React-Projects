import React, { useMemo, useState } from 'react'
import './BMIApp.css'

function BMIApp() {
  const [weight , setWeight] = useState(50);
  const [height , setHeight] = useState(145);

  if(weight && height){
    var bmi = ( weight / ( (height/100) * (height/100))).toFixed(2);
  }

  const output = useMemo(()=>{
    return ( weight / ( (height/100) * (height/100))).toFixed(2)
  },[weight,height]);

  const changeWeight = (e)=>{
    setWeight(e.target.value);
  }

  const changeHeight = (e)=>{
    setHeight(e.target.value);
  }
  
  return (
    <div className='app-container'>
      <div className="app-title">BMI CALCULATOR</div>
      <div className="app-content">

        <div className="app-inputsec">
          <p className='slider-output'>Weight : {weight} kg</p>
          <input type="range" className='slider-input' defaultValue='50' step="1" min="40" max="200" onChange={(e)=>changeWeight(e)}/>
          <p className='slider-output'>Height : {height} cm</p>
          <input type="range" className='slider-input' defaultValue='145' step="1" min="140" max="220" onChange={(e)=>changeHeight(e)}/>
        </div>

        <div className="app-outputsec">
          <p>Calculated BMI : {output}</p>
        </div>

      </div>
    </div>
  )
}

export default BMIApp
