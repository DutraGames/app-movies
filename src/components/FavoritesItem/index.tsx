import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Container,Banner,BannerContainer,Detail, Text,ButtonDetail, ButtonDelete,Rate, CampoRate,Buttons} from './style'

export default function FavoriteItem({data, remove, navigate}:any){
    return(
        <Container>
            <Detail>
                <BannerContainer>
                    <Banner resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`}}/>
                </BannerContainer>
                <CampoRate>
                    <Text size={20}>{data.title}</Text>
                    <Detail>
                        <MaterialCommunityIcons name="star" size={24} color="#eeff00" />
                        <Rate>{data.vote_average}/10</Rate>
                    </Detail>
                </CampoRate>
            </Detail>

            <Buttons>
                <ButtonDetail onPress={() => navigate(data)}>
                    <MaterialCommunityIcons name="post-outline" size={40} color="#fff" />
                    
                </ButtonDetail>
                <ButtonDelete onPress={() =>remove(data.id)}>
                    <MaterialCommunityIcons name="delete" size={40} color="#fff" />
                </ButtonDelete>

            </Buttons>
        </Container>
    )
}