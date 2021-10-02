import React, {useEffect, useState} from "react"
import Header from "../../components/Header"
import {Container, AreaSeach, SeachButton, SeachCampo, Title, Banner, BannerButton, SliderMovies} from './style'

import api, {key} from "../../api"

import {Feather} from '@expo/vector-icons'
import List from "../../components/List"

import {getListMovies} from '../../util/movie'

export default function Home(){

    const [nowMovies, setNowMovies]:any = useState([])
    const [popularMovies, setPopularMovies]:any = useState([])
    const [topMovies, setTopMovies]:any = useState([])

    useEffect(() => {
        async function getMovies(){
            let isActive = true

            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params:{
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                })
            ])

            const nowList = getListMovies(5, nowData.data.results)
            const popularList = getListMovies(5, popularData.data.results)
            const topList = getListMovies(5, topData.data.results)

            setNowMovies(nowList)
            setPopularMovies(popularList)
            setTopMovies(topList)
        }

        getMovies()

    }, [])
    return(
       <Container>
           <Header title="Início"/>

           <AreaSeach>
                <SeachCampo  placeholder="Vingadores" placeholderTextColor="#888"/>
                <SeachButton>
                    <Feather name="search" size={35} color="#fff" />
                </SeachButton>
           </AreaSeach>

           <Title>Em Cartaz</Title>
           <BannerButton>
               <Banner resizeMethod="resize" source={{uri: 'https://f.i.uol.com.br/fotografia/2019/04/23/15560338625cbf314652022_1556033862_3x2_md.jpg'}}/>
           </BannerButton>
           <SliderMovies 
           horizontal={true}
           data={nowMovies}
           renderItem={({item}: any) => <List data={item}/> } 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />

           <Title>Populares</Title>
           <SliderMovies 
           horizontal={true}
           data={popularMovies}
           renderItem={({item}: any) => <List data={item}/> } 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />

           <Title>Em alta</Title>
           <SliderMovies 
           horizontal={true}
           data={topMovies}
           renderItem={({item}: any) => <List data={item}/> } 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />
       </Container>
    )
}