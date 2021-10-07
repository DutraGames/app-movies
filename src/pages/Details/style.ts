import Styled from 'styled-components/native/'

export const Container = Styled.View`
background-color: #090011;
padding: 4px 0;
flex:  1;
`

export const Header = Styled.View`
z-index: 2;
flex-direction: row;
justify-content: space-between;
padding: 0 15px;
position: absolute;
top: 20px;
display: flex;
width: 100%;

`

export const Title = Styled.Text`
font-size: 22px;
padding-left: 15px;
font-weight: bold;
color: #fff;
margin-top: 10px;
`

export const ButtonHeader = Styled.TouchableOpacity`
background-color: #090015;
width: 46px;
height: 46px;
border-radius: 23px;
justify-content: center;
align-items: center;
`

export const ButtonLink = Styled.TouchableOpacity`
background-color: #f00;
width: 60px;
height: 60px;
align-items: center;
justify-content: center;
border-radius: 30px;
position: absolute;
z-index: 2;
top: 320px;
right: 30px;
`

export const Banner = Styled.Image`
width: 100%;
height: 350px;
border-bottom-right-radius: 70px;
border-bottom-left-radius: 70px;
`

export const RateArea = Styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 15px;
`

export const Rate = Styled.Text`
color: #FFF;
font-size: 25px;
font-weight: bold;
`

export const ListGenre = Styled.FlatList`
max-height: 45px;
padding-left: 15px;
margin: 8px 0;
`

export const Des = Styled.Text`
color: #fff;
padding: 0 15px;
padding-bottom: 10px;
line-height: 25px;
font-size: 18px;
`

export const ButtonShare = Styled.TouchableOpacity`
background-color: #0f0;
width: 60px;
height: 60px;
align-items: center;
justify-content: center;
border-radius: 30px;
position: absolute;
bottom: 30px;
right: 20px;
`