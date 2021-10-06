import React, {useEffect, useState} from "react"
import { Container, Title,Header, ButtonHeader, Banner, ButtonLink, RateArea, Rate, ListGenre, Des, ButtonShare} from "./style"
import {Feather, Ionicons} from '@expo/vector-icons'
import Stars from 'react-native-stars'

import {useNavigation, useRoute} from '@react-navigation/native'
import api, {key} from "../../api"
import Genre from '../../components/Genre'
import { ScrollView, Modal, Share } from "react-native"
import ModalLink from "../../components/ModalLink"
import {MoviesHas,MoviesSave, MoviesDelete} from '../../util/storage'

export default function Details(){

    const Navigation = useNavigation()
    const Route = useRoute()

    const [movie, setMovie] = useState<object>({})
    const [open, setOpen] = useState<boolean>(false)
    const [favorite, setFavorite] = useState<boolean>(false)
    
    useEffect(() => {
        let isActive:boolean = true

        async function getMovie() {
            const response = await api.get(`/movie/${Route.params?.id}`, {
                params:{
                    api_key: key,
                    language: 'pt-BR',
                }
            })

            if(isActive){
                setMovie(response.data)
                
                const isFavorite = await MoviesHas(response.data)
                setFavorite(isFavorite)
            }
        }

        getMovie()

        return () =>{
            isActive = false
        }
    }, [])

    const BtnLinkView = () =>{
        if (movie.homepage !== '') {
            return(
                <ButtonLink onPress={() => setOpen(true)}>
                    <Feather name="link" size={35} color="#fff"/>
                </ButtonLink>
            )
        }
    }

    const Favorite = async() =>{

        if (favorite) {
            await MoviesDelete(movie.id)
            setFavorite(false)
        }else{
            await MoviesSave("@favorites", movie)
            setFavorite(true)
        }
    }

    const onShare = async (msg:string) =>{
        const result = await Share.share({
            message: msg,
          })
    }
    
    return(
        <Container>
            <Header>
                <ButtonHeader onPress={() => Navigation.goBack()}>
                <Feather name="arrow-left" size={28} color="#fff" />
                </ButtonHeader>

                <ButtonHeader onPress={() => Favorite(movie)}>
                {favorite? (
                    <Ionicons name="bookmark" size={28} color="#fff" />
                ): (
                    <Ionicons name="bookmark-outline" size={28} color="#fff" />
                )}
                </ButtonHeader>
            </Header>
            <Banner resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}/>

            {BtnLinkView()}            

            <Title numberOfLines={2}>{movie.title}</Title>

            <RateArea>
                <Stars half={true}
                default={movie.vote_average}
                count={10}
                starSize={20}
                fullStar={<Ionicons name="star" size={24} color="#eaa33e" />}
                emptyStar={<Ionicons name="star-outline" size={24} color="#eaa33e" />}
                halfStar={<Ionicons name="star-half" size={24} color="#eaa33e" />}
                disabled={true}
                />
                <Rate>{movie.vote_average}/10</Rate>
            </RateArea>

            <ListGenre data={movie?.genres}
            renderItem={({item}:any) => <Genre data={item}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            keyExtractor={(item:any) => String(item.id)}
            />

            <Title>Descrição</Title>
            <ScrollView>
                <Des>{movie.overview}</Des>
                <ButtonShare onPress={() => onShare(movie.overview)}>
                    <Ionicons name="share-social" size={35} color="#fff"/>
                </ButtonShare>
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={open}>
                <ModalLink link={movie.homepage} title={movie.title} close={() => setOpen(false)}/>
            </Modal>

        </Container>
    )
}