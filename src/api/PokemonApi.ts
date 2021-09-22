
import { PokemonModel } from "../pokemon/pokemonSlice";
import axiosClient from "./GetApi";

interface ListResponse<T>{
    count:number;
    next:String;
    previous:any;
    results:T[]
}

const apiPokemon = {
    async getAll() :Promise<ListResponse<PokemonModel>> {
        const url = "";
        return await axiosClient.get(url);
    }
};
export default apiPokemon;