import React, {useEffect, useState} from "react"
import {Container, ButtonGit} from './style'
import Header from "../../components/Header"
import { AntDesign } from '@expo/vector-icons';
import {WebView} from 'react-native-webview'
import {Modal} from 'react-native'
import ModalLink from "../../components/ModalLink";

export default function About(){

    const [dados, setDados] = useState<object>({})
    const [open, setOpen] = useState<Boolean>(false)

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
            
            <ButtonGit onPress={() => setOpen(true)}>
                <AntDesign name="github" size={50} color="#fff"/>
            </ButtonGit>

            <Modal animationType="slide" transparent={true} visible={open}>
            <ModalLink link={dados.github} title={dados.name} close={() => setOpen(false)}/>
            </Modal>
        </Container>
    )
}