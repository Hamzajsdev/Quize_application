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
import theme from '../common/Theme';
import backErrow from '../assets/icons/backErrow.png';
import {useNavigation} from '@react-navigation/native';
import profile from '../assets/icons/profile.png';
import {Input, NativeBaseProvider, Stack} from 'native-base';
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import LinearGradient from 'react-native-linear-gradient';

const EditProfile = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();

  const handlePress = () => {
    Navigation.navigate('Setting');
  };
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <StatusBar
          backgroundColor={theme.colors.white}
          barStyle="dark-content"
        />
        <View
          style={[styles.container, {width: width / 1, height: height / 1}]}>
          <View style={[styles.fluid_container, {width: width / 1.1}]}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={backErrow} style={styles.backErrow} />
            </TouchableOpacity>
            <View style={styles.profileCard}>
              <View style={styles.profileImage}>
                <Image source={profile} style={styles.profile} />
              </View>
              <View style={{gap: 20}}>
                <View style={styles.gaps}>
                  <Text style={styles.name}>First Name *</Text>
                  <Stack space={4} w="100%" alignItems="center">
                    <Input placeholder="Muhammad" />
                  </Stack>
                </View>
                <View style={styles.gaps}>
                  <Text style={styles.name}>First Name *</Text>
                  <Stack space={4} w="100%" alignItems="center">
                    <Input placeholder="Hamza" />
                  </Stack>
                </View>
                <View style={styles.gaps}>
                  <Text style={styles.name}>Email *</Text>
                  <Stack space={4} w="100%" alignItems="center">
                    <Input placeholder="abc123@gmail.com" />
                  </Stack>
                </View>
                <View style={styles.gaps}>
                  <Text style={styles.name}>Username *</Text>
                  <Stack space={4} w="100%" alignItems="center">
                    <Input placeholder="dummy-123" />
                  </Stack>
                </View>
              </View>
            </View>
            <LinearGradient
              colors={['#338573', '#66D4BC', '#4faa98']}
              style={styles.button}>
              <Text style={styles.botton_text}>Save</Text>
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  fluid_container: {
    alignSelf: 'center',
    marginTop: 30,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  profile: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
  },
  profileImage: {
    alignSelf: 'center',
    position: 'absolute',
    top: -35,
  },
  profileCard: {
    backgroundColor: theme.colors.white,
    height: 470,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 50,
    elevation: 5,
    padding: 20,
    paddingTop: 50,
  },
  name: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  gaps: {
    gap: 10,
  },
  button: {
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  botton_text: {
    color: theme.colors.shadGreen,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
});
