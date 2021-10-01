import React from "react"
import Header from "../../components/Header"
import {Container, AreaSeach, SeachButton, SeachCampo, Title, Banner, BannerButton} from './style'

import {Feather} from '@expo/vector-icons'
import { FlatList } from "react-native"
import List from "../../components/List"

export default function Home(){
    return(
       <Container>
           <Header title="Início"/>

           <AreaSeach>
                <SeachCampo  placeholder="Vingadores" placeholderTextColor="#888"/>
                <SeachButton>
                    <Feather name="search" size={35} color="#fff" />
                </SeachButton>
           </AreaSeach>

           <BannerButton>
               <Banner resizeMethod="resize" source={{uri: 'https://f.i.uol.com.br/fotografia/2019/04/23/15560338625cbf314652022_1556033862_3x2_md.jpg'}}/>
           </BannerButton>

           <Title>Lançamentos</Title>
           <FlatList data={[1,2,3,4,5]} renderItem={() => <List/>} horizontal showsHorizontalScrollIndicator={false}/>
       </Container>
    )
}