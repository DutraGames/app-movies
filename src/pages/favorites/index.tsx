import React, {useEffect, useState} from "react"
import { FlatList } from "react-native-gesture-handler"

import Header from '../../components/Header'
import {Container} from './style'
import {GetMoviesSave} from '../../util/storage'
import FavoriteItem from "../../components/FavoritesItem"

export default function Favorites(){

    const [movies, setMovies] = useState<object>([])

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
    }, [])


    return(
        <Container>
            <Header title="Favoritos"/>

            <FlatList data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
                renderItem={({item}) => <FavoriteItem data={item}/>}
            />
        </Container>
    )
}