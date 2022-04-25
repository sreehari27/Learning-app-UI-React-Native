import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
    FlatList,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Goodmorning</Text>
                        <Text style={styles.nameText}>Aaron Taylor</Text>
                    </View>
                    <View style={styles.class}>
                        <ImageBackground source={require('../../Assets/imagebg.png')}
                            style={styles.bgimg} imageStyle={{ borderRadius: 5 }}>
                            <Text style={styles.classText}>Class</Text>
                            <Text style={styles.clasNameText}>Plus two science</Text>
                        </ImageBackground>
                    </View>

                    <View style={styles.sub}>
                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={styles.subButton} onPress={()=> this.props.navigation.navigate('Course')} activeOpacity={1}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>Biology</Text>
                            </TouchableOpacity>

                            <View style={styles.subButton}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>Physics</Text>
                            </View>

                            <View style={styles.subButton}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>Chemistry</Text>
                            </View>

                            <View style={styles.subButton}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>Maths</Text>
                            </View>

                            <View style={styles.subButton}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>English</Text>
                            </View>

                            <View style={styles.subButton}>
                                <Icon name="circle" color="#00C458" size={23} />
                                <Text style={styles.subText}>Malayalam</Text>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.recentCourse}>
                        <Text style={styles.recntCourseText}>Recent courses</Text>

                        <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/biology.jpg')}>
                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>


                                </ImageBackground>
                            </View>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/chemistry.jpg')}>
                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>

                                </ImageBackground>
                            </View>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/physics.jpg')}>
                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>

                                </ImageBackground>
                            </View>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/chem.jpg')}>
                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>

                                </ImageBackground>
                            </View>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/bio.jpg')}>

                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>

                                </ImageBackground>
                            </View>

                            <View style={styles.videoView}>
                                <ImageBackground style={styles.VideoImg}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={require('../../Assets/math.jpg')}>

                                    <View style={styles.videoPlay}>
                                        <Icon name="play-circle-outline" color='#FFFFFF' size={35} />
                                        <Text style={styles.videoTitle}>Course Title</Text>
                                    </View>

                                </ImageBackground>
                            </View>

                        </ScrollView>
                    </View>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{height:450}}>

                        <View style={styles.specs}>
                            <View style={styles.specIcon}>
                            </View>
                            <View style={styles.titleAlign}>
                                <Text style={styles.specTitle}>Target live classes</Text>
                            </View>

                            <View style={styles.textAlign}>
                                <Text style={styles.specDesc}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableHighlight style={styles.bookButton}>
                                    <Text style={styles.buttonText}>Book a free Class</Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                        <View style={styles.specs}>
                            <View style={styles.specIcon}>
                            </View>
                            <View style={styles.titleAlign}>
                                <Text style={styles.specTitle}>Avail free online counselling session</Text>
                            </View>
                            <View style={styles.textAlign}>
                                <Text style={styles.specDesc}>By LearningHub's career experts</Text>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableHighlight style={styles.bookButton}>
                                    <Text style={styles.buttonText}>Schedule a call</Text>
                                </TouchableHighlight>
                            </View>
                        </View>

                    </ScrollView>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        height: 80,
        width: '100%',
        justifyContent: "center",
        // backgroundColor:'red'
    },
    titleText: {
        fontSize: 12,
        color: '#002333',
        paddingLeft: 10
        // paddingLeft:35
    },
    nameText: {
        fontSize: 24,
        color: '#002333',
        fontWeight: 'bold',
        paddingLeft: 10
        // paddingLeft:35
    },
    class: {
        height: 140,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
    },
    bgimg: {
        width: '99%',
        height: 80,
        justifyContent: "center",
        alignContent: "center",

    },
    classText: {
        fontSize: 14,
        color: '#BAC3C7',
        paddingLeft: 20
    },
    clasNameText: {
        fontSize: 18,
        color: '#FFFFFF',
        paddingLeft: 20
    },
    sub: {
        height: 55,
        // paddingLeft:35,
        flexDirection: 'row'
    },
    subButton: {
        width: 92,
        height: 39,
        borderWidth: 2,
        borderColor: '#002333',
        alignItems: "center",
        // justifyContent:"center",
        flexDirection: 'row',
        marginEnd: 10,
        borderRadius: 8,
    },

    subText: {
        fontSize: 12,
        color: '#002333',

    },
    recentCourse: {
        height: 170,
        // backgroundColor:'red',

    },
    videoView: {
        width: 213,
        height: 121,
        marginEnd: 10,
        // borderWidth:5
        // backgroundColor:'red'
    },
    VideoImg: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

        // borderRadius:50,
        // borderWidth:5,
    },
    recntCourseText: {
        fontSize: 14,
        color: '#002333',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    videoTitle: {
        color: '#FFFFFF',
        marginLeft: 10
    },
    videoPlay: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 20,
        marginLeft: 20
    },
    specs: {
        width: 238,
        height: 367,
        backgroundColor: '#002333',
        borderRadius: 8,
        alignItems: "center",
        marginEnd: 10
    },
    specIcon: {
        width: 79,
        height: 79,
        backgroundColor: '#002E43',
        borderRadius: 50,
        marginTop: 32,
        marginBottom: 10
    },
    specTitle: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    specDesc: {
        color: '#446270',
        textAlign: 'left'
    },
    textAlign: {
        height: 70,
        width: 180,
        marginTop: 20
    },
    bookButton: {
        width: 145,
        height: 47,
        backgroundColor: '#00C458',
        justifyContent: "center",
        borderRadius: 8

    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "center",
    },
    buttonView: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    },
    titleAlign: {
        height: 50,
        width: 180,
        marginTop: 20,
        alignItems: 'flex-start'
    },

})