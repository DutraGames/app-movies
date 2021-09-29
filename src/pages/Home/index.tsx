import React from "react"

import {View, Text} from 'react-native'

import Header from "../../components/Header"
import {Container} from './style'

export default function Home(){
    return(
       <Container>
           <Header title="Início"/>
       </Container>
    )
}