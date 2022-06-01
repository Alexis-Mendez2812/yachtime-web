import React,{ useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CardHomeYate from "../CardHomeYate/CardHomeYate"
// import SearchBar from "./SearchBar"
import { allYates } from "../../Redux/Actions/actions"
import { Link } from 'react-router-dom';
import Paginado from "../Paginado/Paginado"


export default function HomeYates(){
    
   const [aux , setAux] = useState('') 

    //Mi data de los estados
   const state =useSelector(state=>state)
   const allYats =useSelector(state=>state.allYates)

   const [currentPage,setCurrentPage]=useState(1)
   const [charactersPerPage,setCharactersPerPage]=useState(6)
   const indexOfLastCharacter = currentPage* charactersPerPage
   const indexOfFirstCharacter= indexOfLastCharacter- charactersPerPage

   let currentYates=[]
if(allYats&&allYats.length>1){ currentYates = allYats.slice(indexOfFirstCharacter,indexOfLastCharacter)
}
console.log(currentYates,state)
   const paginado = (pageNumber)=>{setCurrentPage(pageNumber)}

   const dispatch = useDispatch()  
   useEffect(()=>{
   dispatch(allYates())    
    },[] )


//Funcion del select Genres/api/db
function handleOnGenres(event){  
    dispatch((event.target.value))   
    setAux(event.target.value)
    setCurrentPage(1)
    
} 
// console.log("estado auxiliar",aux)

//Funcion del los select by orders 
function handleOnOrder(event){  
    dispatch((event.target.value))   
    setAux(event.target.value)
    setCurrentPage(1)
} 
    // console.log("estado auxiliar",aux)


                        return(
                        <div className="Home-conteiner">
                            
      <div className="Home-nav">                  
<div className="Home-search" key="searchbar">
    {/* <SearchBar   />     */}
</div>


{/*Orden alfabetico */}
<select id='alf' defaultValue='All' onChange={(e) => handleOnOrder(e)}> 
    <option value='asc'>Alphabetical</option>
    <option value='asc'>asc</ option>
    <option value='des'>des</   option>     
</select>



</div>
{state?.copyYates &&<Paginado
charactersPerPage={charactersPerPage}
allCharacters={state.copyYates.length}
paginado={paginado}
/>}
<div>
    {allYats&& <CardHomeYate  yates={currentYates} />}
</div>
<div className="Home-conteiner">

{state?.copyYates &&<Paginado
charactersPerPage={charactersPerPage}
allCharacters={state.copyYates.length}
paginado={paginado}
/>}
</div>
{state.copyYates?.length===0 && <h1 className="mensaje-error" > No hay yates disponibles disponibles  </h1> }
<p>{aux}</p>
    
</div>
)};