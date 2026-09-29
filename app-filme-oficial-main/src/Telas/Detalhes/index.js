import {View,Text} from 'react-native'
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native-web';

export default function Detalhes(){ 

    const route =useRoute();

    return(
        <View>
            <Text>DETALHES PAGES</Text>
            <Text>{route.params.titulo}</Text>
            <Text>{route.params.nota}</Text>
            <Image style={{width:150, height: 150}} source={route.params.imagem}></Image>
        </View>
    )
}