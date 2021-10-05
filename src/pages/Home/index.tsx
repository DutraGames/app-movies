import React, {useEffect, useState} from "react"
import Header from "../../components/Header"
import {Container, AreaSeach, SeachButton, SeachCampo, Title, Banner, BannerButton, SliderMovies} from './style'
import {ActivityIndicator} from 'react-native'
import api, {key} from "../../api"

import {useNavigation} from '@react-navigation/native'

import {Feather} from '@expo/vector-icons'
import List from "../../components/List"

import {getListMovies,bannerRandom} from '../../util/movie'

export default function Home(){

    const [nowMovies, setNowMovies] = useState<object>([])
    const [popularMovies, setPopularMovies] = useState<object>([])
    const [topMovies, setTopMovies] = useState<object>([])
    const [banner, setBanner] = useState<object>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [searcher, setSearcher] = useState<string>('')

    const Navigator:any = useNavigation()

    useEffect(() => {

        let isActive:boolean = true
        const ac = new AbortController()

        async function getMovies(){

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

            if(isActive){
                const nowList = getListMovies(10, nowData.data.results)
                const popularList = getListMovies(5, popularData.data.results)
                const topList = getListMovies(5, topData.data.results)

                setBanner(nowData.data.results[bannerRandom(nowData.data.results)])

                setNowMovies(nowList)
                setPopularMovies(popularList)
                setTopMovies(topList)
                setLoading(false)
            }


        }

        getMovies()

        return () =>{
            isActive = false
            ac.abort()
        }
    }, [])

    const NavigatorDetail = (item:any) =>{
        Navigator.navigate("Detalhes", {id: item.id})
    }

    const NavigateBusca = () =>{
        if (searcher !== '') {
            Navigator.navigate("Busca", {title: searcher})
            setSearcher('')
        }
    }


    if(loading){
        return(
            <Container>
                <ActivityIndicator size={'large'} color={'#fff'}/>
            </Container>
        )
    }
    return(
       <Container>
           <Header title="Início"/>

           <AreaSeach>
                <SeachCampo  placeholder="Vingadores" placeholderTextColor="#888" value={searcher} onChangeText={(text) => setSearcher(text)}/>
                <SeachButton onPress={NavigateBusca}>
                    <Feather name="search" size={35} color="#fff" />
                </SeachButton>
           </AreaSeach>

           <Title>Em Cartaz</Title>
           <BannerButton onPress={() => NavigatorDetail(banner)}>
               <Banner resizeMethod="resize" source={{uri: `https://image.tmdb.org/t/p/original/${banner.poster_path}`}}/>
           </BannerButton>
           <SliderMovies 
           horizontal={true}
           data={nowMovies}
           renderItem={({item}: any) => <List data={item} NavigatorPage={() => NavigatorDetail(item)}/>} 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />

           <Title>Populares</Title>
           <SliderMovies 
           horizontal={true}
           data={popularMovies}
           renderItem={({item}: any) => <List data={item} NavigatorPage={() => NavigatorDetail(item)}/> } 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />

           <Title>Em alta</Title>
           <SliderMovies 
           horizontal={true}
           data={topMovies}
           renderItem={({item}: any) => <List data={item} NavigatorPage={() => NavigatorDetail(item)}/> } 
           showsHorizontalScrollIndicator={false} 
           keyExtractor={(item:any) => String(item.id)}
           />
       </Container>
    )
}