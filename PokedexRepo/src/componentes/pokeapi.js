import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemonById = async (id) => {
    try{
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    }catch (error){
        console.error('Error fetching pokemon: ', error);
        return null;
    }
};
