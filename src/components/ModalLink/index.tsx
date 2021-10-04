import { Title,CloseButton} from './style'
import React from 'react'
import {Feather} from '@expo/vector-icons'
import {WebView} from 'react-native-webview'

export default function ModalLink({link, close, title}:any){

    return(
        <>
            <CloseButton onPress={close}>
                <Feather name="x" size={35} color="#fff"/>
                <Title>{title}</Title>
            </CloseButton>
            <WebView source={{uri: link}}/>
        </>
    )
}