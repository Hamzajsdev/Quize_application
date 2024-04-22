import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View, useWindowDimensions} from 'react-native';
import theme from '../common/Theme';
import Home from '../screen/Home/Home';
import Insurance from '../screen/Home/Insurance';
import Discount from '../screen/Home/Discount';
import Profile from '../screen/Home/Profile';
import Quizes from '../screen/Home/Quizes';

const BottomTabs = () => {
  const {width, height} = useWindowDimensions();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconImage;
          let ticketImg;
          let containerStyle;

          if (route.name === 'Home') {
            iconImage = require('../assets/icons/Home.png');
          } else if (route.name === 'Insurance') {
            iconImage = require('../assets/icons/rape.png');
          } else if (route.name === 'Quizes') {
            iconImage = require('../assets/icons/quize.png');
          } else if (route.name === 'Discount') {
            iconImage = require('../assets/icons/bank.png');
          } else if (route.name === 'Profile') {
            iconImage = require('../assets/icons/comunity.png');
          }
          const tintColor = focused
            ? theme.colors.lightGreen
            : theme.colors.white;
          return (
            <View>
              <View>
                <Image source={iconImage} style={{tintColor}} />
              </View>
              <View style={[containerStyle]}>
                <Image source={ticketImg} />
              </View>
            </View>
          );
        },

        tabBarStyle: {
          backgroundColor: theme.colors.green,
          bottom: 20,
          width: width / 1 - 32,
          left: 16,
          height: 60,
          elevation: 5,
          borderTopLeftRadius: 18,
          borderBottomRightRadius: 18,
          borderColor: 0,
          height: height / 11,
        },
        tabBarLabel: ({focused}) => {
          const routeName = route.name;
          const textColor = focused
            ? theme.colors.lightGreen
            : theme.colors.white;

          switch (routeName) {
            case 'Home':
            case 'Insurance':
            case 'Quizes':
            case 'Discount':
            case 'Profile':
              return (
                <Text
                  style={{
                    color: textColor,
                    fontSize: 12,
                    fontWeight: '400',
                    bottom: 10,
                  }}>
                  {routeName}
                </Text>
              );
            default:
              return null;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Insurance" component={Insurance} />
      <Tab.Screen name="Quizes" component={Quizes} />
      <Tab.Screen name="Discount" component={Discount} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
