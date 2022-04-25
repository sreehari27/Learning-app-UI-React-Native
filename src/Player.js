import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput,TouchableHighlight, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default class Player extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.videoPlay}>
                    <View style={styles.videoView}>
                        <ImageBackground source={require('../Assets/video.jpg')} style={styles.videoImg}>

                        </ImageBackground>
                    </View>
                    <View style={styles.videoDisc}>
                        <View style={styles.descTextView}>
                            <Text style={styles.descText}>Long Chapter Name can be here shown here</Text>
                        </View>
                        <View style={styles.download}>
                            <MaterialIcons name="file-download" size={30} color='#ffffff' />
                        </View>
                    </View>

                    <View style={styles.videoNext}>
                        <View style={styles.PreviousButton}>
                            <MaterialIcons name="arrow-back-ios" size={20} color={'#9F9F9F'}></MaterialIcons>
                            <Text style={styles.previousbuttnText}>Previous</Text>
                        </View>

                        <View style={styles.partTextView}>
                            <MaterialIcons name="radio-button-checked" size={20} color={'#00C458'} />
                            <Text style={styles.partText}>Part 1</Text>
                        </View>
                        <View style={styles.nextButton}>
                            <Text style={styles.nextText}>Next</Text>
                            <MaterialIcons name='arrow-forward-ios' size={18} color="#FFFFFF" />
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.chatView}>
                        <View style={styles.chatHistory}>
                            <View style={{ height: '100%', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.chatText}>Your sample question can be shown here no matter how long</Text>
                            </View>
                            <View style={styles.imgView}>
                                <Image source={{ uri: 'https://randomuser.me/api/portraits/women/22.jpg' }}
                                    style={styles.image}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={styles.chatButton}>
                        <View style={{ flexDirection: 'row',marginBottom:15 }}>
                            <View style={styles.questionView}>
                                <TextInput placeholder="Ask a question?" placeholderTextColor={'#446270'} style={styles.question}></TextInput>
                            </View>
                            <View style={styles.buttonHolder}>
                                <TouchableHighlight style={styles.postButton}>
                                    <Text style={styles.postButtonText}>Post</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.whatsapp}>
                            <FontAwesomeIcon name="whatsapp" size={25} color={'#00C458'} />
                            <Text style={styles.whatsappText}>Chat with teacher</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00202F'
    },
    videoPlay: {
        width: '100%',
        height: '40%',
    },
    videoImg: {
        width: '100%',
        height: '100%'
    },
    videoView: {
        width: '100%',
        height: '65%'
    },
    videoDisc: {
        width: '100%',
        height: '20%',
        flexDirection: "row",
    },
    videoNext: {
        width: '100%',
        height: '15%',
        flexDirection: "row",
        alignItems: "center",
    },
    descTextView: {
        justifyContent: "center",
        width: '80%',
        height: '100%',
    },
    descText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    download: {
        width: '20%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 0.2,
        borderLeftColor: '#173442'
    },
    PreviousButton: {
        flexDirection: "row",
        width: '33%',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 8
    },
    previousbuttnText: {
        color: '#9F9F9F',
        fontSize: 13,

    },
    partTextView: {
        flexDirection: "row",
        width: '34%',

        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    partText: {
        color: '#00C458',
        fontSize: 13,
        fontFamily: 'Gilroy ☞',
        marginLeft: 10
    },
    nextButton: {
        height: '100%',
        width: '33%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row'
    },
    nextText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'Gilroy ☞'
    },
    bottomView: {
        height: '60%',
        width: '100%',
        // backgroundColor:'red'
    },
    chatView: {
        width: '100%',
        height: '65%',
        justifyContent: 'flex-end',
        alignItems: "center",
        // backgroundColor:'green'
    },

    chatButton: {
        width: '100%',
        height: '35%',
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:'yellow'
    },
    chatHistory: {
        height: 60,
        width: '90%',
        backgroundColor: '#000000',
        borderRadius: 4,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    chatText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginLeft: 5
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    imgView: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        paddingRight: 15,
        justifyContent: 'center'
    },
    question: {
        color: '#FFFFFF',
        fontSize: 18,
        paddingLeft: 20
    },
    questionView: {
        height: 50,
        width: '70%',
        backgroundColor:'#062E40',
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4
    },
    postButton: {
        backgroundColor: '#FFFFFF',
        width: 55,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        marginEnd: 5

    },
    postButtonText: {
        fontSize: 16,
        color: '#00202F',
        fontWeight: 'bold',
    },
    buttonHolder: {
        height: 50,
        width: '20%',
        backgroundColor: '#062E40',
        alignItems: "flex-end",
        justifyContent: "center",
        borderTopEndRadius:4,
        borderBottomRightRadius:4
    },
    whatsapp: {
        height:50,
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#00C458',
        margintop:15,
        borderRadius:4
    },
    whatsappText: {
        fontFamily:'Gilroy ☞',
        fontSize:16,
        marginLeft:15,
        color:'#00C458'
    },
})