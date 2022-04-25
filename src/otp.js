import React,{Component} from "react";
import{
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    TouchableHighlight
}from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
                    <Text style={styles.text}>Verification code</Text>
                    <Text style={styles.otpText}>Please type the verification code sent to</Text>
                    <Text style={styles.phoneNumText}>+91 9876543210</Text>
                </View>



                <View style={styles.otpView}>
                    <View style={styles.otpInput}>
                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                       
                    </TextInput>

                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                        
                    </TextInput>

                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                        
                    </TextInput>

                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                      
                    </TextInput>

                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                       
                    </TextInput>

                    <TextInput style={styles.otpBox} maxLength={1} keyboardType="number-pad">
                        
                    </TextInput>
                    
                    </View>

                    <View style={styles.ButtonView}>
                    <TouchableHighlight style={styles.Button}
                    onPress={()=>this.props.navigation.navigate('studentDetails')}
                    underlayColor='transparant'>
                        <Text style={styles.buttonText}>Resend OTP</Text>
                    </TouchableHighlight>

                    <Text style={styles.otpCountDown}>Resend after 28s</Text>

                    </View>

                    <View style={styles.contactView}>
                        <Icon name='phone' size={20} color={'#00C458'}></Icon>
                        <Text style={styles.contactText}>Contact Us</Text>
                        
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
        height:'10%',
        width:"100%",
        alignItems:'center',
        marginTop:10
    },
    textView:{
        height:'15%',
        margin:10,
        alignItems:'center'

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
    otpView:{
        backgroundColor:'#002333',
        height:'35%',
        width:'100%',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        alignItems:'center',
        justifyContent:'center',
        
    },
    otpInput:{
        flexDirection:"row"
    },
    otpBox:{
        width:'13%',
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
        height:'40%',
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