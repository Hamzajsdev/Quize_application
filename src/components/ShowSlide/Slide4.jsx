import {View, Text, useWindowDimensions, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import qoute from '../../assets/images/slideImage/qoute.png'


const Slide4 = () => {
  const {width} = useWindowDimensions();
  return (

      <View style={[styles.header, {width: width / 1.1}]}>
        <Image source={qoute} resizeMode='stretch' style={styles.qoute} />
        <LinearGradient
          colors={['#338573', '#66D4BC', '#4faa98']}
          style={[styles.bannerCard]}>
          <View style={styles.innerContent}>
            <Text style={styles.text}>WOW !</Text>
          </View>
          <Text style={styles.text_description}>
            By using this app, you will find a pathway to action,{' '}
            <Text
              style={{
                fontWeight: boldFont.fontWeight,
                fontSize: fontSizes.x_large,
              }}>
              small steps the
            </Text>{' '}
            can make a big difference, and inspiration for a new{' '}
            <Text
              style={{
                fontWeight: boldFont.fontWeight,
                fontSize: fontSizes.x_large,
              }}>
              {' '}
              kind of individual power.{' '}
            </Text>
          </Text>
        </LinearGradient>
      </View>
  );
};

export default Slide4;

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    padding: 15,
    gap:30

  },
  bannerCard: {
    height: 400,
    elevation: 5,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 21,
    borderWidth:2,
    borderColor:'#ECFFFB',
    
  },
  text: {
    color: theme.colors.green,
    fontWeight: boldFont.fontWeight,
    fontSize: fontSizes.large,
  },
  innerContent: {
    backgroundColor: theme.colors.white,
    width: 100,
    height: 100,
    borderRadius: 100,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: -50,
    borderWidth: 4,
    borderColor: theme.colors.lightGreen,
  },
  text_description: {
    marginTop: 50,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
    lineHeight: 35,
    color: theme.colors.white,
    textAlign: 'center',
  },
  qoute:{
    width:50,
    height:40,
    marginTop:-50
  }
});
