import React, {useEffect, useState} from "react"
import {Container, ButtonGit, Perfil, Detail, ImgPerfil, Name,Bio} from './style'
import Header from "../../components/Header"
import { AntDesign } from '@expo/vector-icons';
import {Modal, ActivityIndicator} from 'react-native'
import ModalLink from "../../components/ModalLink";

export default function About(){

    const [dados, setDados] = useState<object>({})
    const [open, setOpen] = useState<Boolean>(false)
    const [loading, setLoadung] = useState<boolean>(true)

    useEffect(() => {
        let isActive = true

        async function getGithub() {
            const res = await fetch('https://api-dutra.herokuapp.com/github')
            const data = await res.json()

            if (isActive) {
                setDados(data)
                setLoadung(false)
            }
        }

        if (isActive) {
            getGithub()
        }


        return () => {
            isActive = false
        }
    }, [])

    if (loading) {
        return(
            <Container>
                <ActivityIndicator size="large" color="#fff"/>
            </Container>
        )
    }


    return(
        <Container>
            <Header title="Sobre"/>
            
            <ButtonGit onPress={() => setOpen(true)}>
                <AntDesign name="github" size={50} color="#fff"/>
            </ButtonGit>

            <Perfil>
                <ImgPerfil source={require('../../../assets/perfil.jpg')}/>
                <Detail>
                    <Name>{dados.name}</Name>
                    <Bio>{dados.bio}</Bio>
                </Detail>
            </Perfil>

            

            <Modal animationType="slide" transparent={true} visible={open}>
            <ModalLink link={dados.github} title={dados.name} close={() => setOpen(false)}/>
            </Modal>
        </Container>
    )
}