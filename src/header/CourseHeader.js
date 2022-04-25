import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CourseHeader() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.titleContainer}> */}
            <View style={styles.iconBorder}>
                <Icon name="arrow-back-ios" size={20} color={'#00C458'} />
            </View>
            <View style={styles.headerTitleView}>
                <Text style={styles.headerTitle}>Biology</Text>
            </View>
            {/* </View> */}
            
            <View style={styles.chaptersView}>
                <View style={styles.iconView}>
                    <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                    <Text style={styles.chapterText}>12 Chapters</Text>
                </View>
                <View style={styles.iconView}>
                <Icon name="radio-button-checked" size={20} color={'#00C458'} />
                    <Text style={styles.chapterText}>124 hours</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        // alignItems: "center",
        // flexDirection: 'row',
        backgroundColor: '#00202F',
        paddingLeft: 15,
        paddingTop: 20

    },
    iconBorder: {
        height: 32,
        width: 32,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        fontFamily: 'Gilroy ☞',
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
    },
    headerTitleView:{
       marginTop:20
    },
    chaptersView:{
        flexDirection:'row',
        height:40,
        width:250,
    },
    chapterText:{
        color:'#00C458',
        fontFamily:'Gilroy ☞',
        fontSize:12,
        paddingLeft:10
    },
    iconView:{
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        height:'100%',
        width:'50%',
        alignSelf:'flex-start'
    },
    
})
