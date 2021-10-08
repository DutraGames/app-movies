import React, {useEffect, useState} from "react"
import {Container, ButtonGit} from './style'
import Header from "../../components/Header"
import { AntDesign } from '@expo/vector-icons';
import {WebView} from 'react-native-webview'
import {Modal} from 'react-native'

export default function About(){

    const [dados, setDados] = useState<object>({})

    useEffect(() => {
        let isActive = true

        async function getGithub() {
            const res = await fetch('https://api-dutra.herokuapp.com/github')
            const data = await res.json()

            if (isActive) {
                setDados(data)
            }
        }

        if (isActive) {
            getGithub()
        }


        return () => {
            isActive = false
        }
    }, [])


    return(
        <Container>
            <Header title="Sobre"/>
            
            <ButtonGit>
                <AntDesign name="github" size={50} color="#fff"/>
            </ButtonGit>
        </Container>
    )
}