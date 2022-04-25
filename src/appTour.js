import { CurrentRenderContext } from "@react-navigation/native";
import React, {Component} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
     View,
     Text, 
     TouchableHighlight,
     StyleSheet,
} from "react-native";

export default class appTour extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.illustration}>
                    <Text style={styles.illustrationText}>
                    Images/Illustrations
                    </Text>
                </View>
                <View style={styles.tourDisc}>
                    <Text style={styles.tourTitle}>App tour title</Text>
                    <Text style={styles.tourDiscText}>The app tour description goes here.</Text>
                </View>
                <View style={styles.tourButtonView}>
                    <View style={styles.buttonBorder}>
                    <TouchableHighlight style={styles.Button}
                    onPress={()=> this.props.navigation.navigate('Drawer')}
                    underlayColor='transparant' 
                    >
                        <Icon name='arrow-forward' size={25} color='#FFFFFF'/>
                    </TouchableHighlight>
                    </View>
                    
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:'#ffffff'

    },

    illustration:{
        height:'70%',
        width:'96%',
        backgroundColor:'#F3F3F3',
        marginTop:'2%',
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center"
    },
    illustrationText:{
        fontSize:12,
        color:'#000000'
    },
    tourDisc:{
        height:'10%',
        width:'96%',
        alignItems:"center",
        justifyContent:"center",

    },
    tourTitle:{
        fontSize:20,
        color:'#002333',
        textAlign:"center"
    },
    tourDiscText:{
        fontSize:14,
        color:'#9F9F9F'
    },
    tourButtonView:{
        height:'18%',
        width:'96%',
        alignItems:"center",
        justifyContent:"center",

    },
    Button:{
        height:56,
        width:56,
        backgroundColor:'#00C458',
        borderRadius:4,
        alignItems:"center",
        justifyContent:"center",
        borderColor:'#00C4583D'
    },
    buttonBorder:{
        height:70,
        width:70,
        alignItems:"center",
        justifyContent:"center",
        borderColor:'#00C458',
        borderRadius:10,
        backgroundColor:'transparent',
        borderWidth:3
    }
})