import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import styles from './pokemon.module.css';
import { getAll, GetPokeMonAll, PokemonModel, GetLoadingPokeMonAll, search } from './pokemonSlice';
function Pokemon() {

    const [lDing, setLoading] = React.useState<boolean>(false);
    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getAll());
    }, [dispatch])
    const data: PokemonModel[] | undefined = useAppSelector(GetPokeMonAll);

    const showPokemon = (data: PokemonModel[]) => {
        if (data) {
            return data.map((value, key) => {
                return (
                    <div key={key} className={styles.row_pokemon}>
                        <p>{value.name}</p>
                        <img className={styles.img} src={`https://pokeres.bastionbot.org/images/pokemon/${key}.png`} alt="" />
                    </div>
                )
            })
        }
    }
    const loading = useAppSelector(GetLoadingPokeMonAll);

    React.useEffect(() => {
        if (loading === "1") {
            setLoading(true);
        } else {
            setLoading(false)
        }
    }, [loading, setLoading])
    const showLoading = (loading: boolean) => {
        if (loading) {
            return (
                <div className={styles.loading}>
                    <img alt="" src={"https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif"} />
                </div>
            )
        } else {
            return null;
        }
    }
    const onSearch=({target:{name,value}}: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(search(value));
    }
    return (
        <>
            <div>
                <input placeholder="search" onChange={onSearch}  className={styles.search} />
            </div>
            {showLoading(lDing)}
            <div className={styles.container}>
                {showPokemon(data)}
            </div>
        </>
    )
}
export default Pokemon;