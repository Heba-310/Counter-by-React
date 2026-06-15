import React, { useState,useEffect } from "react";
import Counter from "./func";
import "./App.css"
import axios from "axios";


function Counter2() {
const[counter,setcounter]=useState(0)
  
const Increase=()=>{
setcounter(counter+1)

}
const Reset=()=>{
setcounter(counter*0)

}
const decrease=()=>{
  if(counter>0){
    setcounter(counter-1)
  }


}

  return (
    <div className="co">
    <h2>{counter}</h2>
 <button onClick={ Increase}>Increase</button>
  <button onClick={ decrease}>Decrease</button>
  <button onClick={ Reset}>Reset</button>
  <div className="nass">
 <h3 className={counter%2==0? "Even" : ""}>Even</h3>
 <h3 className={counter%2==1? "Odd" : ""}>Odd</h3>

 </div>
    </div>
  );
}

export default Counter2;