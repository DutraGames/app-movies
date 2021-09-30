import styled from 'styled-components/native'

export const Container = styled.ScrollView`
background-color: #090011;
padding: 4px 0;
flex:  1;
`

export const AreaSeach = styled.View`
flex-direction: row;
display: flex;
width: 100%;
height: 40px;
`

export const SeachButton = styled.TouchableOpacity`
width: 12%;
height: 100%;
align-items: center;
justify-content: center;
`

export const SeachCampo = styled.TextInput`
width: 83%;
height: 100%;
background-color: #505050;
color: #fff;
padding: 0 10px;
margin-left: 15px;
border-radius: 8px;
font-size: 15px;
`


export const Title = styled.Text`
margin-left: 15px;
color: #fff;
font-size: 30px;
font-weight: bold;
`

export const BannerButton = styled.TouchableOpacity`
width: 100%;
padding: 15px;
height: 230px;
`

export const Banner = styled.Image`
height: 100%;
width: 100%;
border-radius: 10px;
`

import {} from 'react-native'