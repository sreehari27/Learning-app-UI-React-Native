import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {

    return (
        

        <View style={styles.container}>
            <View style={styles.iconView}>
                <View style={styles.iconBorder}>
                    <Icon name="dashboard" size={30} color='#00C458' onPress={()=>navvigation.openDrawer()}></Icon>
                </View>
            </View>

            <View style={styles.logoView}>
                <Image source={require('../../Assets/logo.png')} style={styles.logoImg} />
            </View>
            <View style={styles.classesView}>
                <View style={styles.classButton}>
                    <Icon name="circle" color="#007345" size={23} style={{marginLeft:5}}/>
                    <Text style={styles.classText}>Classes</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 65,
        alignItems: "center",
        flexDirection: 'row',
    },
    iconBorder: {
        borderColor: '#00C458',
        width: 35,
        height: 35,
        borderWidth: 0,
        borderRadius: 8,
    },
    logoView: {

        height: '100%',
        width: '55%',
        justifyContent: "center",
        paddingLeft: 20
    },
    logoImg: {
        width: 180,
        height: 50,
    },
    classesView: {
        width: '30%',
        height: '100%',
        alignItems: "center",
        justifyContent:"center"


    },
    iconView: {
        width: '15%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    classButton: {
        width: 92,
        height: 39,
        borderWidth: 1,
        borderColor: '#00C458',
        alignItems: "center",
        flexDirection: 'row',
        borderRadius: 8,
    },
    classText: {
        fontSize: 12,
        color: '#00C458',
        marginLeft:10

    },
})
