import ReactDOM from "react-dom/client"
import React from "react"
import  Card from "./Card"

function App(){
    return  <div className="Container">
    <h1 className="CardsTag">Toto App</h1>
     <Card cardTitle="Card1" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti accusantium quasi quaerat dolorum ab blanditiis deleniti laborum voluptatibus optio magni?" />
     <Card cardTitle="Card2" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti accusantium quasi quaerat dolorum ab blanditiis " />
     <Card cardTitle="Card3" description="Lorem ipsum dolor sit, amet consectetur dolorum ab blanditiis deleniti laborum voluptatibus optio magni?" />
     
    
</div>
}
export default App;