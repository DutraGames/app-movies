import React from "react"
import {Container, Title} from './style'

type props = {
    data: object
}

export default function Genre({data}:props){
    return(
        <Container>
            <Title>{data.name}</Title>  
        </Container>
    )
}