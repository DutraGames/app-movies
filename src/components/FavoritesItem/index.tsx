import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Container,Banner,BannerContainer,Detail, Text,ButtonDetail, ButtonDelete,Rate, CampoRate} from './style'

export default function FavoriteItem({data}:any){
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

            <Detail>
                <ButtonDetail>
                    <MaterialCommunityIcons name="post-outline" size={30} color="#fff" />
                    
                </ButtonDetail>
                <ButtonDelete>
                    <MaterialCommunityIcons name="delete" size={30} color="#fff" />
                </ButtonDelete>

            </Detail>
        </Container>
    )
}