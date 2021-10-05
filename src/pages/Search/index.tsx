import React, {useEffect, useState} from "react"
import {ActivityIndicator} from 'react-native'
import {Container, ListFilmes} from './style'
import {useNavigation, useRoute} from '@react-navigation/native'
import api, {key} from "../../api"
import SeacherItem from "../../components/SearcherItem"

export default function Search(){
    
    const Route = useRoute()
    const Navigation = useNavigation()

    const [loading, setLoading] = useState<boolean>(true)
    const [movie, setMovie] = useState<object>([])

    useEffect(() =>{

        let isActive = true

        async function getSearch () {
            const reponse = await api.get('/search/movie', {
                params:{
                    query: Route?.params?.title,
                    api_key: key,
                    language: "pt-BR",
                    page: 1
                }
            })

            if (isActive) {
                setMovie(reponse.data.results)
                setLoading(false)
            }


        }

        if (isActive) {
            getSearch()
        }

        return () =>{
            isActive = false
        }
    }, [])

    if (loading) {
        <Container>
            <ActivityIndicator size={'large'} color={'#fff'}/>
        </Container>
    }

    
    return(
        <Container>
            <ListFilmes data={movie}
            showVerticalScrollIndicator={false}
            keyExtractor={(item:any) => String( item.id)}
            renderItem={({item}) => <SeacherItem data={item}/>}
            />
        </Container>
    )
}