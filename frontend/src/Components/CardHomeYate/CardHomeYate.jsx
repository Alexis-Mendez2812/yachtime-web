//CardHomeYate
import React from 'react'
import "./CardHome.css"

export default function CardHomeYate({yates}) {

    return (
    <div className="CardHome-container">
        {yates.map((e)=>(
          <div key={e.id}  href={`/home/${e.id}`} >
          <CardHome 
            
            id={e.id} 
            make={e.make}
            model={e.model}

             />
            </div>
            )
        )}
    </div>
  )
}


export  function CardHome(props){
    const {id,make,model} = props
    // console.log(Genres)
    return(
    <div key={id} className="CardHome-card-conteiner" >
    <div  className="CardHome-card" >
    <div  className="CardHome-card-image" >

    <img className="CardHome-card-image2" src="http://todovector.com/vector/medios-de-transporte/marinos/yates/3.png" alt="yates" />
    </div>
    <div className="CardHome-details">

    <h3 >{`${model}' ${make}`}</h3>

    <div >

    <a href={`/home/${id}`} className="CardHome-span" >More details...</a>
    </div>
    </div>
    </div>
    </div>

)};
