import React,{useState,useEffect} from 'react';

import axios from 'axios';


const App = () => {

    
      const [quote,setQuote] = useState('')

   console.log(quote);

  const RandomdigitPicker = ()=>{
          
        return Math.floor(Math.random()*100)

    }

     const quotefetch = async (func)=>{

        const res = await axios.get('https://type.fit/api/quotes')

        const quotes = res.data;

        setQuote(quotes[func()])
         
        

    }



const randomColor = ()=>{

 const r = Math.floor(Math.random()*255)
 const g = Math.floor(Math.random()*255)
 const b = Math.floor(Math.random()*255)

const body = document.body 
const quote = document.getElementById('quote');
body.style.background = `rgb(${r},${g},${b})`
body.style.transition= 'background 0.6s'
quote.style.color = `rgb(${r},${g},${b})`



}

useEffect(()=>{

     randomColor()
    quotefetch(RandomdigitPicker)

},[])



  
 return <div className="ui container">
   
<div className="ui centered grid" style={{marginTop: 60}} >
 <div className="ui segment" style={{padding:60,fontSize:20, borderRadius:6}}>
  <div className="ui header">Random Quote's</div> 
  
 <cite id="quote"> {`"${quote.text}"`}</cite> - <span>{quote.author}</span>
  



           
<div style={{textAlign:"right",marginTop:10}} >
    <button className="ui green basic button" onClick={()=>{
     randomColor()
     quotefetch(RandomdigitPicker);
    }} >Generate quote</button>
    </div>
  



 </div>
</div>
 </div>







}




export default App;
