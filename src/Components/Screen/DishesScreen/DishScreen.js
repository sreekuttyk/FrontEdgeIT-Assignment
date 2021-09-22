import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import "./DishScreen.css"
function DishScreen() {

    const [cards,setCard]=useState([])
     useEffect(()=>{
      axios.get("http://localhost:8000/dishes")
        .then((response)=>{
           let ItemData=  response.data
            setCard(ItemData)
            })
         },[])

        function deleteHandler(id){
          axios.delete(`http://localhost:8000/dishes/${id}`).then((response)=>{
            alert("are you sure to delete this item")
             window.location.reload()
          })
         }
            return (
        
        <div className="cardwrapper">
         {cards.map((card)=>{
              return(
                  <div className="card">
              <img className="cardimage"src={card.url} alt=""/>
              <h1 className="cardname">{card.title}</h1>
              <h2 className="cardname">{card.description}</h2>
              
              <button className="btn"onClick={()=>deleteHandler(card.id)}>Delete</button>
              </div>
             ); })}
            
            </div>
    );
    
 }

export default DishScreen;
