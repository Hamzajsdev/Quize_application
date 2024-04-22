import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import theme from '../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import backErrow from '../assets/icons/backErrow.png';
import setting from '../assets/icons/setting.png';
import logout from '../assets/icons/logout.png';

const Setting = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Profile');
  };
  const handlesubmit = () => {
    Navigation.navigate('Login');
  };
  const handleEdit = () => {
    Navigation.navigate('EditProfile');
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.shadGreen} barStyle='dark-content' />
      <View style={styles.container}>
        <View style={[styles.header, {width: width / 1.1}]}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.heading}>Settings</Text>
          <Text></Text>
        </View>
      </View>
      <View style={[styles.main_profile, {width: width / 1.1}]}>
        <View style={styles.header_content}>
          <View style={styles.bg_setting}>
            <Image source={setting} style={styles.setting} />
          </View>
          <TouchableOpacity onPress={handleEdit}>
            <Text style={styles.edit}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logout}>
        <View style={[styles.logout_content, {width: width / 1.1}]}>
          <View style={styles.header_content}>
            <View style={styles.bg_setting}>
              <Image source={logout} style={styles.setting} />
            </View>
            <TouchableOpacity onPress={handlesubmit}>
              <Text style={styles.edit}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
    elevation: 4,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  main_profile: {
    alignSelf: 'center',
    marginTop: 30,
  },
  header_content: {
    flexDirection: 'row',
    gap: 35,
    alignItems: 'center',
  },
  bg_setting: {
    backgroundColor: theme.colors.shadGreen,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  setting: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  edit: {
    color: theme.colors.black,
    fontSize: 22,
    fontWeight: mediumFont.fontWeight,
  },
  logout: {
    backgroundColor: theme.colors.white,
    height: 80,
    elevation: 2,
    marginTop: 30,
    justifyContent: 'center',
  },
  logout_content: {
    alignSelf: 'center',
  },
  email: {
    width: 27,
    height: 27,
    marginLeft: 10,
  },
});
