import React, {useEffect, useState} from "react"
import { FlatList } from "react-native-gesture-handler"

import Header from '../../components/Header'
import {Container} from './style'
import {GetMoviesSave, MoviesDelete} from '../../util/storage'
import FavoriteItem from "../../components/FavoritesItem"
import {useNavigation, useIsFocused} from '@react-navigation/native'

export default function Favorites(){

    const [movies, setMovies] = useState<object>([])
    const Navigate = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        let isActive = true

        async function getFavoritesMovies() {
            const results =  await GetMoviesSave('@favorites')

            if (isActive) {
                setMovies(results)
            }
        }

        if (isActive) {
            getFavoritesMovies()
        }

        return () => {
            isActive = false
        }
    }, [isFocused])

    const hasDelete = async(id) =>{
        const results = await MoviesDelete(id)
        setMovies(results)
    }

    const DetailPage = (item) =>{
        Navigate.navigate("Detalhes", {id: item.id})
    }

    return(
        <Container>
            <Header title="Favoritos"/>

            <FlatList data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
                renderItem={({item}) => <FavoriteItem 
                data={item}
                remove={hasDelete}
                navigate={() => DetailPage(item)}
                />}
            />
        </Container>
    )
}