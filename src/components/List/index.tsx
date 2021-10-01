import React from "react"
import {Container, Title, Banner, Rate, RateArea} from './style'
import { Ionicons } from '@expo/vector-icons';

export default function List(){
    return(
        <Container>
            <Banner resizeMethod="resize" source={{uri: 'https://f.i.uol.com.br/fotografia/2019/04/23/15560338625cbf314652022_1556033862_3x2_md.jpg'}}/>
            <Title>SS</Title>
            <RateArea>
                <Ionicons name="md-star" size={20} color="#eaa33e" />
                <Rate>8/10</Rate>
            </RateArea>      
        </Container>
    )
}