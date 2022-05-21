const axios = require("axios");
require("dotenv").config();
const { API_KEY, HASH_KEY } = process.env;

//search characters whose names start with the given string

const getComics = async (req, res, next) => {
  const { title } = req.query;
  try {
    if (title ) {
      let toRender = await getByTitle(title, date);     
      return toRender === [] ? res.status(404).json({message: 'No comics found'}) 
      : res.status(200).json(toRender);
    }    

    let allComics = await axios.get(
      `https://gateway.marvel.com/v1/public/comics?noVariants=true&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}&limit=100`
    );
    allComics = allComics.data.data.results;

    let toRender = allComics.map((comic) => ({
      id: comic.id,
      title: comic.title,
      description: comic.description,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
    }));
    console.log(toRender.length);
    res.status(200).json(toRender);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    let comic = await axios.get(
      `https://gateway.marvel.com/v1/public/comics/${req.params.id}?ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`
    );
    comic = comic.data.data.results;

    let toRender = comic.map((comic) => ({
      id: comic.id,
      title: comic.title,
      issue: comic.issueNumber,
      description: comic.description,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      pages: comic.pageCount,
      creators: comic.creators.items.map((creator) => ({
        name: creator.name,
        role: creator.role, //aca va editor, writer, penciller, etc
      })),
      serie: comic.series.name, //si es una serie de revistas aca viene el nombre de la misma
    }));

    res.status(200).json(toRender);
  } catch (error) {
    next(error);
  }
};
//trae resultados con coincidencia parcial desde inicio , es decir title = "iron" va a traer a todos los comics que empiecen con "iron", ahora si empieza con The iron, chau no lo va a encontrar :/
const getByTitle = async (title) => {
  try {
    let search = await axios(
      `https://gateway.marvel.com/v1/public/comics?noVariants=true&limit=100&titleStartsWith=${title}&dateDescriptor=${date}&ts=1&apikey=${API_KEY}&hash=${HASH_KEY}`);

    search = search.data.data.results;

    let toRender = search?.map((comic) => ({
      id: comic.id,
      title: comic.title,
      issue: comic.issueNumber,
      description: comic.description,
      img: comic.thumbnail.path + "." + comic.thumbnail.extension,
      pages: comic.pageCount,
      creators: comic.creators.items.map((creator) => ({
        name: creator.name,
        role: creator.role, //aca va editor, writer, penciller, etc
      })),
      serie: comic.series.name, //si es una serie de revistas aca viene el nombre de la misma
    }));
return toRender;
  } catch (error) {
    return error;
  }
};



module.exports = { getComics, getById, getByTitle };
//     try{
//         const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
//     data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})

//     }catch(error){
//         console.log(error)
//     }
// })
