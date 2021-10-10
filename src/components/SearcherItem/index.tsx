import React from "react"
import { Ionicons } from '@expo/vector-icons';
import {Container,Title,Banner, RateContainer,Rate} from './style'

type props = {
    data: object,
    navigate: any
}

export default function SeacherItem({data, navigate}:props){

    return(
        <Container onPress={() =>{
            if (data.release_date !== '') {
                navigate(data)
            }else{
                alert("Filme sem data de lançamento!")
            }
        }}>
            <Banner resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}/>
            <Title numberOfLines={1}>{data?.title}</Title>
            <RateContainer>
                <Ionicons name="md-star" size={15} color="#e7e410" />
                <Rate>{data?.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}