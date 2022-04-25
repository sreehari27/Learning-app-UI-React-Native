import React from "react";
import { DrawerActions, NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


import Register from './src/Register';
import otp from './src/otp';
import studentDetails from './src/studentDetails';
import schoolBoard from './src/schoolBoard';
import appTour from './src/appTour';
import Home from "./src/tab/Home";
import DrawerContent from "./src/drawer/DrawerContent";
import Profile from "./src/tab/Profile";
import Header from "./src/header/header";
import Course from "./courses/Course";
import videos from "./topTab/videos";
import chapterTest from "./topTab/chapterTest";
import resources from "./topTab/resources";
import qnBank from "./topTab/qnBank";
import Player from "./src/Player";
import CourseHeader from "./src/header/CourseHeader";
import VideoHeader from "./src/header/VideoHeader";
import ProfileHeader from "./src/header/profileHeader";


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()


function NewStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="otp"
        component={otp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="studentDetails"
        component={studentDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="schoolBoard"
        component={schoolBoard}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="appTour"
        component={appTour}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Course"
        component={Course}
        options={{ header:CourseHeader}}
      />
      <Stack.Screen
      name="Player"
      component={Player}
      options={{ headerShown: false }}
      />

      <Stack.Screen
      name="MyTopTab"
      component={MyTopTab}
      options={{header:VideoHeader,}}
      />

      <Stack.Screen
        name="Drawer"
        component={NewDrawer}
        options={{ headerShown: false }}


      />

    </Stack.Navigator>
  )
}


function NewDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name='Tab'
        component={NewTab}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  )
}

function NewTab() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
        position:'absolute',
        bottom:15,
        right:15,
        left:15,
        borderRadius:10,
        height:65,
        shadowOpacity:25,
        shadowRadius:10,
      }
    }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ header: Header ,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({focused})=> focused ?
          <Icon name="home" size={30} color={'#00C458'} /> :
          <Icon name="home" size={30} color={'grey'}/>}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          header:ProfileHeader,
          tabBarActiveTintColor: '#00C458',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({focused})=> focused ?
          <Icon name="person" size={30} color={'#00C458'} /> :
          <Icon name="person" size={30} color={'grey'}/>}} />
    </Tab.Navigator>
  )
}

function MyTopTab(){
  return(
    <TopTab.Navigator
    screenOptions={{tabBarLabelStyle:{fontSize:10, color:'#fff'}, tabBarStyle:{backgroundColor:'#00202F'},
    tabBarIndicatorStyle:{ borderWidth:2, borderColor:'#00C458', borderRadius:50}}}
    >
      <TopTab.Screen
      name="videos"
      component={videos}
      />

      <TopTab.Screen
      name="chapter Test"
      component={chapterTest}
      />

      <TopTab.Screen
      name="resources"
      component={resources}
      />

<TopTab.Screen
      name="qn Bank"
      component={qnBank}
      />

      
    </TopTab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <NewStack />
    </NavigationContainer>
  )
}