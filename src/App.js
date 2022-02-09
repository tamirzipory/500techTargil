import React from 'react';
import Grid from './Grid';
import movies from './data_a';
import pokemon from './data_b';
import './App.css'

const Trailer = ({ data }) => (
  <a href={data.url}
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

/*I added another component to display the url*/ 

const PokemonUrl = ({ data }) => (
  <a href={data}
     target="_blank"
     rel="noopener noreferrer">
    click here to more info
  </a>
);


const PokemonName = ( {data} ) => <span style={{ textTransform: 'capitalize' }}>{data}</span>;


const moviesConfig = [
  {
    title: 'id',
    field: 'imdbID'
  },
  {
    title: 'title',
    field: 'Title'
  },
  {
    title: 'rating',
    field: 'imdbRating',
  },
  {
    title: 'time',
    field: 'Runtime'
  },
  {
      title: 'trailer',
      field: 'Trailer',
      component: Trailer
  }

];

const pokemonConfig = [
  {
    title: 'pokedex #',
    field: 'number'
  },
 
 {
     title: 'name',
     field: 'name',
     component: PokemonName
 },

 {
   title: 'info',
   field: 'url',
   component: PokemonUrl
 }
 
];

const App = () => (
  <div>

    <h2>Movies</h2>

    <Grid config={moviesConfig} data={movies} />
  
    <h2>Pokemon</h2>

    <Grid config={pokemonConfig} data={pokemon} />
    
  </div>
);

export default App;
