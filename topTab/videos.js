import React, { Component } from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { exp } from "react-native/Libraries/Animated/Easing";

export default class videos extends Component {
    render() {
        return (
            <View style={styles.container}>

                
                <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity style={styles.videoView} activeOpacity={1} onPress={()=>this.props.navigation.navigate('Player')}>
                    <View style={styles.Thumbnile}>
                        <ImageBackground source={require("../Assets/tutor.jpg")} style={styles.imageView}>
                            <View style={styles.chapterLabel}>
                                <Text style={styles.labelText}>Biology</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.videTextView}>
                        <Text style={styles.videoText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chaterContainer}>
                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Chapter 1</Text>
                            </View>

                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Part 1</Text>
                            </View>
                        </View>


                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoView} activeOpacity={1}>
                    <View style={styles.Thumbnile}>
                        <ImageBackground source={require("../Assets/tutor.jpg")} style={styles.imageView}>
                            <View style={styles.chapterLabel}>
                                <Text style={styles.labelText}>Biology</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.videTextView}>
                        <Text style={styles.videoText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chaterContainer}>
                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Chapter 1</Text>
                            </View>

                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Part 2</Text>
                            </View>
                        </View>


                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.videoView} activeOpacity={1}>
                    <View style={styles.Thumbnile}>
                        <ImageBackground source={require("../Assets/tutor.jpg")} style={styles.imageView}>
                            <View style={styles.chapterLabel}>
                                <Text style={styles.labelText}>Biology</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.videTextView}>
                        <Text style={styles.videoText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chaterContainer}>
                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Chapter 2</Text>
                            </View>

                            <View style={styles.chapterView}>
                                <Icon name="radio-button-checked" color={'#797b80'} size={18} />
                                <Text style={styles.chapterText}>Part 1</Text>
                            </View>
                        </View>


                    </View>
                </TouchableOpacity>


                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    videoView: {
        width: '90%',
        height: 297,
        elevation: 4,
        alignSelf: "center",
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        marginBottom:10
    },
    Thumbnile: {
        width: '100%',
        height: '70%',
        borderRadius: 2
    },
    videoText: {
        color: '#002333',
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    videTextView: {
        width: '90%',
        height: '30%',
        marginLeft: 20,
        marginTop: 10,
    },
    chapterView: {
        flexDirection: "row",
        alignItems: "center",
        marginEnd: 50
    },
    chapterText: {
        color: '#797b80',
        paddingLeft: 10
    },
    chaterContainer: {
        flexDirection: "row"
    },
    imageView: {
        width: '100%',
        height: '100%',
        borderRadius: 2,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    chapterLabel:{
        backgroundColor:'#00C458',
        width:55,
        height:21,
        borderRadius:4,
        alignItems:"center",
        margin:10,
    },
    labelText:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'bold'
    },
    videoContainer:{
        marginBottom:10
    }
})