import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import styles from './pokemon.module.css';
import { getAll, GetPokeMonAll, PokemonModel } from './pokemonSlice';
function Pokemon() {


    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getAll());
    }, [dispatch])
    const data: PokemonModel[] | undefined = useAppSelector(GetPokeMonAll);

    const showPokemon=(data:PokemonModel[])=>{
        if(data){
            return data.map((value,key)=>{
                return (
                    <div key={key} className={styles.row_pokemon}>
                        <p>{value.name}</p>
                <img className={styles.img} src={`https://pokeres.bastionbot.org/images/pokemon/${key}.png`} alt="" />
            </div>
                )
            })
        }
    }
    return (
        <div className={styles.container}>
            {showPokemon(data)}
        </div>
    )
}
export default Pokemon;