import React, { useState } from 'react'

const Input_form = () => {
    
    const [weight ,setweight] = useState(0);
    const [height , setheight] = useState(0);
    const [bmi ,setbmi] = useState('');
    const [message , setmessage] = useState('');

    let calbmi =(e)=>{
        e.preventDefault();
        if(weight===0 || height ===0){
            alert("please enter correct input and output");
        }
        let bmi = (weight/(height*height)*703);
        setbmi(bmi);
        if(bmi>=25){
            setmessage('you are Overweight');
        }else{
            setmessage("you are underWeight");
        }
    }
    let relaod =()=>{
        window.location.reload();
    }




  return (
    

    <>
        <form onSubmit={calbmi}>
            <label>weight</label>
            <input value={weight} placeholder='weight' onChange={(e)=>setweight(e.target.value)}></input><br></br>
            <label>Height</label>
            <input value={height} placeholder='height' onChange={(e)=>setheight(e.target.value)}></input>
            <button>submit </button>
            <button onClick={relaod}>Reload</button>
            <h4>{bmi}</h4>
            <h4>{message}</h4>
        </form>
    
    
    </>
  )
}

export default Input_form