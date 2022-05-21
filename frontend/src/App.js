import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from "./Components/LandingPage/LandingPage";
import HomeCharacter from "./Components/HomeComponent/HomeCharacter/HomeCharacter";
import HomeComics from "./Components/HomeComponent/HomeComic/HomeComics";
// import DetailComic from "./Components/HomeComponent/HomeComic/DetailComic/DetailComic"
// import DetailCharacter from "./Components/HomeComponent/HomeCharacter/DetailCharacter/DetailCharacter"
import Login from "./Components/Login/Login.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/LandingPage' element={<LandingPage />} />
          <Route path='/homeCharacter' element={<HomeCharacter />} />
          <Route path='/homeComics' element={<HomeComics />} />
          {/* <Route path='/detailComic/:id' element={<DetailComic />} /> */}
          {/* <Route path='/detailCharacter/:id' element={<DetailCharacter />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;


// function App() {
//   return (
//     <div>
//       <h1>Hello World :-)</h1>
//       <button>Info de llamada ppal </button>
//       <div className="fiacaClass">
//         {data.results.map((comic) => (
//           <div className="card" key={comic.id}>
//             <h3>title: {comic.title}</h3>
//             <img
//               src={comic.thumbnail.path + "." + comic.thumbnail.extension}
//               alt={comic.title}
//               width="250px"
//               height="350px"
//             />
//             <div className="fiacaClass">
//               <ul>
//                 <li>id: {comic.id}</li>
//                 <li>description: {comic.description}</li>
//                 <li>price: {comic.prices[0].price}</li>
//                 <li>price: {comic.prices[0].type}</li>
//                 <li>isbn: {comic.isbn}</li>
//                 <li>Pages :{comic.pageCount} </li>
//                 <div>
//                   {comic.creators?.items?.map((creator) =>
//                     creator.name && creator.role ? (
//                       <p key={creator.id}>
//                         {" "}
//                         ({creator.role}): {creator.name}{" "}
//                       </p>
//                     ) : null
//                   )}
//                 </div>
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

