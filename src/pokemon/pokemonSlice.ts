
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


export interface PokemonModel{
    name:String,
    url:string
}
export enum ValidationPokemon {
    Fulfilled,
    Pending,
    Reject
}
let pokemonArray:PokemonModel[]=[];

export interface pokemonState {
    pokemonArray:PokemonModel[];
    status?: ValidationPokemon;
  }
  
  const initialState: pokemonState = {
    pokemonArray:pokemonArray,
    status:undefined,
  };



 const pokemonSlice = createSlice({
    name:"pokemon",
    initialState:initialState,
    reducers:{
        getAll:(state)=>{
            state.status=ValidationPokemon.Pending
        },
        getAllSuccess:(state,action: PayloadAction<any>)=>{
            state.status=ValidationPokemon.Fulfilled;
            state.pokemonArray=action.payload;
        },
        search:(state,action: PayloadAction<String>)=>{
            
        },
        searchSuccess:(state,action: PayloadAction<PokemonModel[]>)=>{
            state.pokemonArray=action.payload;
        }
    }
});

export const {getAll,getAllSuccess,search,searchSuccess}=pokemonSlice.actions;

export default pokemonSlice.reducer;

export const GetPokeMonAll=(state:RootState)=>state.pokemon.pokemonArray;

export const GetLoadingPokeMonAll=(state:RootState)=>state.pokemon.status?.toString();