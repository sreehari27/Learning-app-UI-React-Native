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
                
                <View style={styles.textView}>
                    <Text style={styles.text}>Enter your mobile number</Text>
                    <Text style={styles.otpText}>We will send you an OTP to verify.</Text>
                </View>



                <View style={styles.phonNumView}>
                    <View style={styles.phonInput}>
                    <TextInput style={styles.contryCode} maxLength={3} keyboardType="number-pad">
                        <Text>+91</Text>
                    </TextInput>
                    <TextInput style={styles.phonNum} maxLength={10} keyboardType="number-pad"
                    placeholder="Mobile number" placeholderTextColor="#446270"></TextInput>
                    </View>

                    <View style={styles.ButtonView}>
                    <TouchableHighlight style={styles.Button}
                    underlayColor='transparant'
                    onPress={()=>this.props.navigation.navigate('otp')}>
                        <Text style={styles.buttonText}>Continue</Text>
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
        // justifyContent:'center'
        
    },
    logoView:{
        height:'65%',
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    textView:{
        height:'10%',
        margin:10

    },
    logoImg:{
        height:60,
        width:250
    },
    text:{
        color:'#002333',
        fontFamily:'Gilroy ☞',
        fontSize:20,
        textAlign:"center"
    },
    otpText:{
        fontFamily:'Gilroy-Regular ☞',
        fontSize:14,
        color:'#9F9F9F',
        marginTop:7,
        textAlign:"center"
    },
    phonNumView:{
        backgroundColor:'#002333',
        height:'25%',
        width:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:'center',
        justifyContent:'center',
        
    },
    phonInput:{
        flexDirection:"row"
    },
    contryCode:{
        width:'15%',
        height:45,
        borderColor:'#13394A',
        backgroundColor:'#062E40',
        color:'#ffffff',
        margin:2,
        borderRadius:5,
        textAlign:"center",
        fontSize:16
        
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
        margin:10,
        width:'100%',
        alignItems:"center"
    },
    Button:{
        backgroundColor:'#00C458',
        width:'76%',
        height:45,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:'bold'
    }

})