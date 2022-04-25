import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class Course extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.TitleContainer}>
                    <TouchableOpacity style={styles.topic} activeOpacity={1} onPress={()=>this.props.navigation.navigate('MyTopTab')}>
                        <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chapterIndicatorView}>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                            </View>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.topic}>
                        <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chapterIndicatorView}>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                            </View>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.topic}>
                        <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chapterIndicatorView}>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                            </View>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.topic}>
                        <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chapterIndicatorView}>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                            </View>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.topic}>
                        <Text style={styles.chapterListText}>Long chapter name can be shown here.</Text>
                        <View style={styles.chapterIndicatorView}>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>Chapter 1</Text>
                            </View>
                            <View style={styles.chapterIndicator}>
                                <Icon name="radio-button-checked" size={20} color={'#9F9F9F'} />
                                <Text style={styles.chapterIndicatorListText}>3 parts</Text>
                            </View>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFF'

    },
    TitleContainer: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FFF',
        paddingLeft: 20,
        paddingBottom:20
    },
    iconBorder: {
        height: 32,
        width: 32,
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 7
    },
    courseTitle: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleView: {
        paddingTop: 40
    },
    description: {
        flexDirection: "row",
        marginTop: 20
    },
    iconView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginEnd: 50
    },
    iconText: {
        color: '#00C458',
        fontSize: 15,
        paddingLeft: 8
    },
    bottomView:{
        height:'60%',
        width:'100%',
        backgroundColor:'#FFFFFF'
    },
    topic:{
        width:'95%',
        height:125,
        marginTop:20,
        borderRadius:8,
        elevation:4,
        backgroundColor:'#FFFFFF',
        paddingLeft:25,
        justifyContent:'center'
    },
    chapterIndicator:{
        flexDirection:'row',
        paddingTop:15,
        width:'50%',
        height:45,
        alignItems:'center'
    },
    chapterIndicatorListText:{
        fontFamily:'Gilroy ☞',
        fontSize:14,
        fontWeight:'600',
        color:'#9F9F9F',
        marginLeft:5,
    },
    chapterListText:{
        color:'#002333',
        fontSize:20,
        fontWeight:'bold'
    },
    chapterIndicatorView:{
        flexDirection:'row'
    },
})