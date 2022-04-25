import React, { Component } from "react";
import { ImageBackground, StyleSheet, TouchableHighlight, View, TextInput, Button,Image} from "react-native";
import { createNativeWrapper } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider,Text } from "react-native-paper";
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    {/* <ImageBackground style={styles.profileBgImg} source={require('../../Assets/profilebg.png')}>

                    </ImageBackground> */}

                    <View style={styles.drawerCloss}>
                        <TouchableHighlight style={styles.closeIconView}>
                            <Icon name="close" size={25} color='#00C458'/>
                        </TouchableHighlight>

                    </View>
                    <View style={styles.drawerProfile}>
                        <View style={styles.profilePlace}>
                        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/22.jpg' }}
                                        style={styles.profilePic}></Image>
                        </View>
                        <View style={styles.profileNameView}>
                            <Text style={styles.profileName}>Aaron Taylor</Text>
                            <Text style={styles.profileId}>ID: 1234</Text>
                            
                        </View>
                        
                    </View>

                </View>

                <View style={styles.menuContainer}>
                    <Divider/>
                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Exam corner</Text>
                    </View>

                    <Divider/>
                    
                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Subrscriptions</Text>
                    </View>

                    <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Analytics</Text>
                    </View>

                    <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Downloads</Text>
                    </View>

                    <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Notifications</Text>
                    </View>

                   <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Referrals</Text>
                    </View>

                    <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#00C458' style={styles.menuIcon}></Icon>
                    <Text style={styles.menuText}>Share app</Text>
                    </View>

                    <Divider/>

                    <View style={styles.menuItem}>
                    <Icon name="check-box-outline-blank" size={30} color='#E14949' style={styles.menuIcon}></Icon>
                    <Text style={styles.logoutText}>Logout</Text>
                    </View>

                    <Divider/>
                    
                </View>

                <View style={styles.enquireView}>
                    <TouchableHighlight style={styles.enquireButton}>
                        <Text style={styles.enquireButtonText}>Enquire now</Text>
                    </TouchableHighlight>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002333'
    },
    profileContainer: {
        // backgroundColor:'red',
        width: '100%',
        height: 200,

    },
    profileBgImg: {
        width: 375,
        height: 375,
        alignSelf: 'flex-start'

    },
    drawerCloss: {
        height: 100,
        width:'100%',

    },
    drawerProfile: {
        height: 100,
        width:'100%',
        alignItems:"center",

        flexDirection:'row'
    },
    closeIconView: {
        margin: 15,
        borderWidth: 2,
        height: 32,
        width: 32,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        borderColor:'#6A828E'

    },
    profilePlace:{
        width:60,
        height:60,
        borderRadius:50,
        borderColor:'#00C458',
        margin:10,
        borderWidth:2
    },
    profileNameView:{

    },
    profileName:{
        fontSize:14,
        color:'#FFFFFF'
    },
    profileId:{
        fontSize:12,
        color:'#6A828E'
    },
    iconProView:{
        alignItems:'flex-end',
        justifyContent:'flex-end',

    },
    menuContainer:{
        // flexDirection:'row',
        width:'100%'
    },
    menuText:{
        fontSize:14,
        color:'#FFFFFF',
        marginLeft:20
    },
    menuItem:{
        flexDirection:'row',
        alignItems:'center',
        width:193,
        height:55
    },
    menuIcon:{
        marginLeft:20
    },
    logoutText:{
        fontSize:14,
        color:'#E14949',
        marginLeft:20
    },

    enquireButton:{
        borderWidth:2,
        borderColor:'#00C458',
        width:193,
        height:47,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
    },
    enquireButtonText:{
        color:'#00C458',
        fontSize:15
    },
    enquireView:{
        height:150,
        alignItems:"center",
        justifyContent:"center"
    },
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 50
    }
})