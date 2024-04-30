import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
} from 'react-native';
import React, { useEffect } from 'react';
import theme from '../common/Theme';
import logo from '../assets/images/logo.png';
import { fontSizes } from '../assets/Fonts/font';
import LoaderKit from 'react-native-loader-kit'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
    const Navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            Navigation.navigate('Login')
            // Navigation.navigate('handleGetToken')
        }, 2000);
    }, [])

    // const handleGetToken = async () => {
    //     const dataToken =  await AsyncStorage.getItem('AccessToken')
    //     if(!dataToken){
    //         Navigation.navigate('Login')
    //     }else{
    //         Navigation.navigate('BottomTabs')
    //     }
    // }

    return (
        <LinearGradient colors={['#66D4BC', '#4faa98', '#338573']} style={styles.container}>
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.colors.lightGreen} barStyle="light-content"/>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.heading}>Quizz-App</Text>
            </View>
            <LoaderKit
                style={styles.loader}
                name={'LineSpinFadeLoader'}
                color={theme.colors.lightGreen}
            />
        </SafeAreaView>
        </LinearGradient>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        gap: -25,
    },
    logo: {
        width: 200,
        height: 180,
        resizeMode: 'stretch',
    },
    heading: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: fontSizes.x_large,
    },
    loader: {
        position: 'absolute',
        bottom: 70,
        width: 50,
        height: 50
    }
});
