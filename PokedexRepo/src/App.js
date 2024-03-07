import React, { useState, useEffect } from 'react';
import Card from './componentes/Card';
import { getPokemonById } from './componentes/pokeapi';
import './styles/App.css';
import Buscador from './componentes/buscador';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [resultados, setResultados] = useState([]);
  
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const pokemonIds = Array.from({ length: 100 }, (_, index) => index + 1);
        const pokemonPromises = pokemonIds.map(id => getPokemonById(id));
        const pokemonInfo = await Promise.all(pokemonPromises);
        setPokemonData(pokemonInfo);
        setResultados(pokemonInfo); // Inicialmente, muestra todos los pokémon
      } catch (error) {
        console.error('Error, Pokemon data: ', error);
      }
    };
    fetchPokemonData();
  }, []);

  const handleSearch = (query) => {
    // Filtrar los resultados según la consulta de búsqueda
    const filteredResults = pokemonData.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(filteredResults);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <div className='Buscador'>
          <Buscador onSearch={handleSearch} className="buscador"/>
        </div>
      </header>
      <div className='listaProductos'>
        {resultados.map(pokemon => (
          <Card
            key={pokemon.id}
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            description={pokemon.types.map(type => type.type.name).join(', ')}
            fullDescripcion={pokemon.species.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


