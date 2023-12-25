
import React from "react"

function Card(props){
   const {cardTitle,description}=props;
    return  <div className="Card">
               <h4 className="title">{cardTitle}</h4>
               <p className="description">{description}</p>
        </div>
        
}

export default Card;