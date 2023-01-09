import { useState } from 'react';
import {data} from './data';
import './App.css';

function App() {
 


  const [place, setPlace] = useState(0);
  const {id, name, image, description, location, showMore} = data[place];
  const[showText, setShowText] = useState(false);
  const showTextClick = (place) => {
    place.showMore=!place.showMore;
    setShowText (!showText)
  }
  

  const previousPlace = () =>{
    setPlace((place =>{
      place --;
      if(place < 0){
        return data.length -1;
      }
      return place
    }))
  }

  const nextPlace = () => {
    setPlace ((place =>{
      place ++;
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
        <p className = "text">{showMore? description:description.substring(0,200) + "..."} <button className="newButton" onClick = {() => showTextClick(place)}>{showMore? "Show less":"Show more"}</button></p>
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


          </div>
  
  );
}

export default App;
