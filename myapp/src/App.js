import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Box from './components/Box/Box';
import BoxNum from './components/BoxNum/BoxNum';
function App() {
  /*
  passing data from parent to child
  return (
   
    <center>
      <div id = "div2">
      <div id="div1">
       <Login name="shanmukhi"/>
      </div>
      </div> 
    </center>
  */

 //passing data from child to data
 /*const callingChild = (value)=>{
  console.log(`Child passed the data ${value}`);
 }
 return (
  <Login callback = {callingChild}/>
 );
*/
//static composing  
// here composing is given as props and props.children are h1 and p tags content
/*
return(
<>
<Box title="composing">  
  <h1>name Shanmukhi</h1>
  <p>I'm from CSE</p>
</Box>
<Box title="composing">
  <h1>name srujana</h1>
  <p>I'm from CSE</p>
</Box>
</>
);
*/

//Dynamic composing

return(
  <>
      <BoxNum/>
  
  </>
);
}

export default App;
