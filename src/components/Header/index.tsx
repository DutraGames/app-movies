import React from "react"
import {Feather} from '@expo/vector-icons'
import {Container, Title, ButtonMenu} from './style'

import {useNavigation} from '@react-navigation/native'

type props = {
    title: string
}

export default function Header({title}:props ){

    const navigation = useNavigation()


    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={40} color="#fff" />
            </ButtonMenu>
            <Title>{title}</Title>
        </Container>
    )
}