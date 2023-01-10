import { useState } from 'react';
import {data} from './data';
import './App.css';

function App() {
 


  const [place, setPlace] = useState(0);
  const {id, name, image, description, location} = data[place];
  const [showText, setShowText] = useState(false);


const [full, setFull] = useState (data);
const removePlace = (id) => {
  nextPlace();
  let newData = full.filter( item => item.id!==id);
  console.log(newData);
  setFull(newData);
 
  
}


  
  

  const previousPlace = () =>{
    setPlace((place =>{
      place --;
      setShowText(false);
    
      if(place < 0){
        return data.length -1;
      }
      return place
    }))
  
  }

  const nextPlace = () => {
    setPlace ((place =>{
      place ++;
      setShowText(false);
      
      if (place > data.length -1){
        place = 0;
      }
      return place;
    }))
  }



  return (
    <div>

      <div className="container">
         <h1>{data.length} best places to visit in New Jersey</h1>
      </div>
      <div className='container'>
        <h2>{id} - {name}</h2> 
      </div>
      <div className = 'container'>
        <p className = "text">{showText? description:description.substring(0,200) + "..."} <button className="newButton" onClick = {() => setShowText(!showText)}>{showText? "Show less":"Show more"}</button></p>
      </div>

      <div className = 'container'>
        <img src = {image} width="600px" alt = "place"/>
      </div>

      <div className = 'container'>
       <h5>{location}</h5>
      </div>

    <div className = "container">
      <button className="btn" onClick = {previousPlace}>Prevoius</button>
      <button className="btn"  onClick = {nextPlace}>Next</button>
      </div>


<div className = 'container'>
  <button onClick = {() => removePlace(id)}>Remove as visited</button>
</div>

          </div>
  
  );
}

export default App;
