import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../components/MainScreen';
import Login from '../screen/Auth/Login';
import Signup from '../screen/Auth/Signup';
import OTP from '../screen/Auth/OTP';
import Home from '../screen/Home/Home';
import BottomTabs from '../components/BottomTabs';
import Slide1 from '../components/ShowSlide/Slide1';
import Levels from '../components/Levels';
import Setting from '../components/Setting';
import EditProfile from '../components/EditProfile';
import AllPoints from '../components/AllPoints';
import AllCommunity from '../components/AllCommunity';
import InviteFriend from '../components/QuizeScreen/InviteFriend';
import QuizeText from '../components/QuizeScreen/QuizeText';
import FinalResult from '../components/QuizeScreen/FinalResult';
import WinnerQuize from '../components/QuizeScreen/winnerQuize';
import InsuranceDetail from '../components/InsuranceDetail';
import MyPolicies from '../components/MyPolicies';
import SignupScreen from '../screen/Dummy/SignupScreen ';
import LoginScreen from '../screen/Dummy/LoginScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='OTP' component={OTP} />
        <Stack.Screen name='BottomTabs' component={BottomTabs} />
        <Stack.Screen name='Slide1' component={Slide1} />
        <Stack.Screen name='Levels' component={Levels} />
        <Stack.Screen name='Setting' component={Setting} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='AllPoints' component={AllPoints} />
        <Stack.Screen name='AllCommunity' component={AllCommunity} />
        <Stack.Screen name='InviteFriend' component={InviteFriend} />
        <Stack.Screen name='QuizeText' component={QuizeText} />
        <Stack.Screen name='FinalResult' component={FinalResult} />
        <Stack.Screen name='WinnerQuize' component={WinnerQuize} />
        <Stack.Screen name='InsuranceDetail' component={InsuranceDetail} />
        <Stack.Screen name='MyPolicies' component={MyPolicies} />
        {/* <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
