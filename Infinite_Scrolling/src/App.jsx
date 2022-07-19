import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
 
  let currentOffset=0;
  const [name,setName]=useState([]);
  const loadname=()=>{
  const twentyfive=[]
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${currentOffset}`)
  .then(({data})=>{
    data.results.forEach((p)=>twentyfive.push(p.name));
    setName((name)=>[...name,...twentyfive])
  })
  currentOffset+=25
};
const handleScroll=(e)=>{
  console.log(e.target.documentElement.scrollTop);
  console.log(window.innerHeight);
  console.log(e.target.documentElement.scrollHeight);
  const scrollHeight=e.target.documentElement.scrollHeight;
  const currentHeight=Math.ceil(
    e.target.documentElement.scrollTop+window.innerHeight
  );
  if(currentHeight+1>=scrollHeight){
    loadname()
  }
};
useEffect(()=>{
  loadname();
  window.addEventListener("scroll", handleScroll)
},[])
  return (
    <div style={{display:"center"}}>
    <div className="App">
    <div style={{display:"center",fontSize:"20px"}}>
  
    <div>
  
  <h2 style={{color:"green"}}>Infinite Scrolling</h2>
</div>
 {name.map((p,i)=>{
    return(
      <div
        key={i}
        style={{display:"flex", justifyContent:"center", gap:"0.5rem", border: "2px"}}
        className="border w-80 h-40 flex justify-around place-items-center"
      >
      <div>{i+1}.</div>
      <div>{p}</div>
      </div>
    );
   })}
  
    </div>
    </div>
    </div>
  )
}

export default App
