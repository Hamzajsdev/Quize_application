import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import actnow from '../../assets/images/slideImage/actnow.jpg';
import qoute1 from '../../assets/images/slideImage/qoute1.png';
import theme from '../../common/Theme';
import {fontSizes, mediumFont} from '../../assets/Fonts/font';

const Slide3 = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={{gap:60}}>
      <View style={[styles.banner, {width: width / 1}]}>
        <Image source={actnow} style={[styles.logo]} />
      </View>
      <View style={[styles.container, {width: width / 1.1}]}>
        <View style={styles.description}>
          <Text style={styles.description}>
            ActNow is the united Nations campaign for individual life action on
            climate change and sustainability{' '}
          </Text>
          <Text style={styles.innerHeading}>
            Every one of us can help limit  global warming and{' '}
            <Text >
              take care of our planet campaign
            </Text>{' '}
          </Text>
        </View>
        <Image source={qoute1} resizeMode='stretch' style={styles.qoute1} />
      </View>
    </View>
  );
};

export default Slide3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    padding: 17,
  },
  banner: {
    backgroundColor: theme.colors.lightGreen,
    height: 45,
    marginTop:80,
   borderRadius:50,
   elevation:5
  },
  logo: {
    position: 'absolute',
    height: 130,
    width:130,
    top:-36,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius:150,

  },
  description: {
    color: theme.colors.lightGreen,
    fontWeight: mediumFont.fontWeight,
    fontSize: fontSizes.large,
    lineHeight: 28,
    textAlign: 'center',
  },
  innerHeading: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
    lineHeight: 28,
    marginTop: 30,
    marginBottom: 60,
    textAlign: 'center',
  },
  qoute1:{
    width:40, height:30,
    alignSelf:'flex-end',
    marginTop:-40
  }
});
