import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    TouchableHighlight
}from 'react-native'


export default class Register extends Component{

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoView}>
                <Image source={require('../Assets/logo.png')}
                style={styles.logoImg}>
                </Image>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                    <Image style={styles.iconImg} source={require('../Assets/icon.png')}></Image>
                    <View style={styles.iconTextView}>
                        <Text style={styles.iconText}>ICON</Text>
                    </View>
                    </View>
                </View>
                
                <View style={styles.textView}>
                    <Text style={styles.text}>Student details</Text>
                </View>



                <View style={styles.stdntInputView}>
                    <View style={styles.stdntInput}>
                    <TextInput style={styles.inputBox}
                    placeholder="Full name" placeholderTextColor='#446270'>
                       
                    </TextInput>

                    <TextInput style={styles.inputBox} 
                    placeholder="Email" placeholderTextColor='#446270'>
                        
                    </TextInput>

                    <TextInput style={styles.inputBox} 
                    placeholder="Select state" placeholderTextColor='#446270'>
                        
                    </TextInput>

                    <TextInput style={styles.inputBox} 
                    placeholder="Pin code" placeholderTextColor='#446270'>
                      
                    </TextInput>
                    
                    </View>

                    <View style={styles.ButtonView}>
                    <TouchableHighlight style={styles.Button}
                    onPress={()=>this.props.navigation.navigate('schoolBoard')}
                    underlayColor='transparant'>
                        <Text style={styles.buttonText}>Register</Text>
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
        backgroundColor:'#ffffff',
        alignItems:'center',

        
    },
    logoView:{
        height:'23%',
        width:"100%",
        alignItems:'center',
        justifyContent:"center"
    },
    textView:{
        height:'8%',
        margin:5,
        alignItems:'center',
        justifyContent:"center"

    },
    logoImg:{
        height:50,
        width:200,
        marginTop:10
    },
    text:{
        color:'#002333',
        fontFamily:'Gilroy ☞',
        fontSize:20
    },
    otpText:{
        fontFamily:'Gilroy-Regular ☞',
        fontSize:14,
        color:'#9F9F9F',
        marginTop:7
    },
    stdntInputView:{
        backgroundColor:'#002333',
        height:'44%',
        width:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:'center',
 
        
    },
    stdntInput:{
        width:'100%',
        alignItems:"center",
        justifyContent:'center',
        marginTop:25
    },
    inputBox:{
        width:311,
        height:51,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        color:'#ffffff',
        margin:5,
        borderRadius:5,
        fontSize:16,
        paddingLeft:20
        
    },
    phonNum:{
        width:'60%',
        height:45,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        paddingLeft:20,
        color:'#ffffff',
        margin:2,
        borderRadius:5,
        fontSize:16
    },
    ButtonView:{
        margin:15,
        width:'100%',
        alignItems:"center"
    },
    Button:{
        backgroundColor:'#00C458',
        width:311,
        height:51,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:'bold'
    },
    otpCountDown:{
        color:'#446270',
        fontFamily:'Gilroy-Regular',
        fontSize:10,
        marginTop:12
    },
    phoneNumText:{
        marginTop:20,
        fontSize:14,
        fontFamily:'Gilroy ☞',
        color:'#002333'
    },
    iconContainer:{
        height:'25%',
        width:'100%',
        alignItems:"center",
        justifyContent:"center"
    },
    icon:{
        height:126,
        width:126,
        backgroundColor:'#F9F9F9',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    iconImg:{
        width:141,
        height:127,

    },
    contactView:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    },
    contactText:{
        color:'#00C458',
        fontSize:14,
        textAlign:"center",
        marginLeft:10
    },
    contactImg:{
        margin:10
    },
    iconTextView:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    iconText:{
        height:20,
        width:35,
        fontFamily:'Gilroy ☞',
        color:'#000000',
        fontWeight:'700'
    }

})