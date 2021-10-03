import React from "react"
import {Container, Title} from './style'

export default function Genre({data}:any){
    return(
        <Container>
            <Title>{data.name}</Title>  
        </Container>
    )
}