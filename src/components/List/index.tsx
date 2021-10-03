import React from "react"
import {Container, Title, Banner, Rate, RateArea} from './style'
import { Ionicons } from '@expo/vector-icons';

export default function List({data, NavigatorPage}:any){
    return(
        <Container onPress={() => NavigatorPage(data)}>
            <Banner resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}/>
            <Title numberOfLines={1}>{data.title}</Title>
            <RateArea>
                <Ionicons name="md-star" size={15} color="#eaa33e" />
                <Rate>{data.vote_average}/10</Rate>
            </RateArea>      
        </Container>
    )
}