import Styled from 'styled-components/native'

export const Container = Styled.View`
flex: 1;
background-color: #090011;
padding: 4px 0;
`

export const ButtonGit = Styled.TouchableOpacity`
align-items: center;
justify-content: center;
`

export const Perfil = Styled.View`
flex-direction: row;
padding: 30px 15px;
width: 100%;
align-items: center;
`

export const Detail = Styled.View`
width: 70%;
`

export const ImgPerfil = Styled.Image`
border-radius: 100px;
width: 30%;
height: 150%;

`


export const Name = Styled.Text`
font-size: 20px;
padding: 0 10px;
color: #fff;
font-weight: bold;
`

export const Bio = Styled.Text`
font-size: 16px;
padding: 0 10px;
color: #fff;
`