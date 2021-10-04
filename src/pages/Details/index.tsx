import React, {useEffect, useState} from "react"
import { Container, Title,Header, ButtonHeader, Banner, ButtonLink, RateArea, Rate, ListGenre, Des} from "./style"
import {Feather, Ionicons} from '@expo/vector-icons'
import Stars from 'react-native-stars'

import {useNavigation, useRoute} from '@react-navigation/native'
import api, {key} from "../../api"
import Genre from '../../components/Genre'
import { ScrollView, Modal } from "react-native"
import ModalLink from "../../components/ModalLink"

export default function Details(){

    const Navigation = useNavigation()
    const Route = useRoute()

    const [movie, setMovie] = useState<object>({})
    const [open, setOpen] = useState<boolean>(false)

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
    
    return(
        <Container>
            <Header>
                <ButtonHeader onPress={() => Navigation.goBack()}>
                <Feather name="arrow-left" size={28} color="#fff" />
                </ButtonHeader>

                <ButtonHeader>
                <Feather name="bookmark" size={28} color="#fff" />
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
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={open}>
                <ModalLink link={movie.homepage} title={movie.title} close={() => setOpen(false)}/>
            </Modal>

        </Container>
    )
}