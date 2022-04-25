import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.profileHead}>
                <Text style={styles.profileText}>Profile</Text>
            </View>
            <View style={styles.profileIcon}>
                <TouchableOpacity style={styles.belIcon} activeOpacity={1}>
                <Icon name="notifications" color={'#FFFFFF'} size={20}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.belIcon} activeOpacity={1}>
                <Icon name="widgets" color={'#00C458'} size={20}/>
                </TouchableOpacity>
                
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#00202F',
        paddingLeft: 15,
        paddingTop: 20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"

    },
    profileHead:{
        width:'50%',
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    profileText:{
        color:'#FFFFFF',
        fontSize:20
    },
    profileIcon:{
        width:'50%',
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end"
    },
    belIcon:{
        width:30,
        height:30
    }
})
