import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from "react-native-paper";
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";


export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.topView}>

                        <View style={styles.profileInfo}>
                            <View style={styles.profileHead}>
                                <View style={styles.profileImgView}>
                                    <Image source={{ uri: 'https://randomuser.me/api/portraits/women/22.jpg' }}
                                        style={styles.profilePic}></Image>
                                </View>
                                <View style={styles.profileInfoText}>
                                    <Text style={styles.proName}>Jane Doe</Text>
                                    <Text style={styles.proId}>ID: 12345678</Text>
                                </View>
                            </View>
                            <View style={styles.personInfo}>
                                <View style={styles.infoTitle}>
                                    <Text style={styles.infoHead}>Personal Info</Text>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Account Settings</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>Aaron Taylor</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Email</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>emaidid123@server.com</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Number</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>+91 9876543210</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoTitle}>
                                    <Text style={styles.infoHead}>Course Info</Text>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Center</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>Inmakes edu</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Course</Text>
                                    </View>

                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>Plus Two Science</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Payment Status</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>Payment Status</Text>
                                    </View>
                                </View>
                                <Divider style={styles.divider} />
                                <View style={styles.infoView}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.proTextOne}>Expiry Date</Text>
                                    </View>
                                    <View style={{ width: '55%' }}>
                                        <Text style={styles.proTextTwo}>Not Applicable</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style={styles.bottomView}>
                            <TouchableOpacity style={styles.paymentButton} activeOpacity={0.9}>
                                <View style={styles.buttonIcon}>
                                    <Icon name="credit-card" color='#FFFFFF' size={30} />
                                </View>

                                <View style={styles.buttonTextView}>
                                    <Text style={styles.butonText}>Custom Payment</Text>
                                </View>

                                <View style={styles.buttonSymbol}>
                                    <Icon name="navigate-next" color='#FFFFFF' size={30} />
                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.paymentButton} activeOpacity={0.9}>
                                <View style={styles.buttonIcon}>
                                    <Icon name="reply" color='#FFFFFF' size={30} style={{ transform: [{ rotateY: '180deg' }] }} />
                                </View>

                                <View style={styles.buttonTextView}>
                                    <Text style={styles.butonText}>Referrals</Text>
                                </View>

                                <View style={styles.buttonSymbol}>
                                    <Icon name="navigate-next" color='#FFFFFF' size={30} />
                                </View>

                            </TouchableOpacity>
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
        backgroundColor: '#EEEEEE'
    },
    topView: {
        width: '100%',
        height: '25%',
        backgroundColor: '#00202F',
        paddingTop: 30,
    },
    profileText: {
        color: '#FFFFFF',
        fontSize: 20,
    },
    titleView: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: "center"
    },
    titleIconView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-end',
        width: '50%',
        paddingEnd: 20
    },
    titleContainer: {
        flexDirection: "row",
        height: 30,
        width: '100%',
    },
    profileInfo: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        // height: 1000,
        marginTop: 40,
        borderRadius: 8,
        alignSelf: "center",
        elevation: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingEnd: 20,
        marginBottom: 10
    },
    profileHead: {
        width: '100%',
        height: 100,
        flexDirection: "row",
        alignItems: "center"
    },
    profileImgView: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: '#19BD9B',
        borderWidth: 1,

        alignItems: "center",
        justifyContent: "center"
    },
    profilePic: {
        height: '100%',
        width: '100%',
        borderRadius: 50
    },
    profileInfoText: {
        marginLeft: 20,
        justifyContent: "center",
    },
    proName: {
        color: '#4D4D4D',
        fontSize: 14,
        fontWeight: 'bold'
    },
    proId: {
        color: '#4D4D4D',
        fontSize: 10
    },
    personInfo: {
        // backgroundColor:'red',
        width: '100%',
    },
    infoHead: {
        color: '#4D4D4D',
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoTitle: {
        width: '100%',
        height: 60,
        justifyContent: "center"
    },
    divider: {
        borderWidth: 0.5,
        borderColor: '#EEEEEE',
    },
    proTextOne: {
        color: '#4D4D4D',
        fontSize: 14,
    },
    proTextTwo: {
        color: '#4D4D4D',
        fontSize: 14,
        fontWeight: 'bold',
    },
    infoView: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center'
    },
    paymentButton: {
        width: '90%',
        height: 68,
        backgroundColor: '#00C458',
        borderRadius: 8,
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        elevation:20
    },
    buttonIcon: {
        width: '20%',
        alignItems: "center",
        justifyContent: "center"
    },
    buttonTextView: {
        width: '70%',
        justifyContent: "center",
    },
    buttonSymbol: {
        width: '10%',
        alignItems: "center",
        justifyContent: "center"
    },
    butonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        paddingRight: 10
    },
    bottomView:{
        width:'100%',
        height:237

    }
})