import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import theme from '../../common/Theme';
import popup from '../../assets/images/slideImage/popup.png';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import shakcalm from '../../assets/images/slideImage/shakcalm.png';

const Slide5 = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{width: width / 1.1}}>
        <View style={styles.card}>
          <Image source={popup} style={styles.popup} />
          <Text style={styles.main_heading}>What Can We Do?</Text>
          <Text style={styles.sub_heading}>Keep calm?</Text>
          <Image source={shakcalm} style={[styles.shakcalm,{width:width/1.135}]}/>
        </View>
      </View>
    </View>
  );
};

export default Slide5;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  card: {
    backgroundColor: theme.colors.white,
    height: 500,
    elevation: 5,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: 40,
    paddingLeft:25,
    paddingRight:20,
    borderWidth:5,
    borderColor:'#ECFFFB',
    
  },
  badge: {
    backgroundColor: theme.colors.green,
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  text: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  contentContainer: {
    position: 'absolute',
    top: 25,
  },
  popup: {
    position:"absolute",
    width: 130,
    height: 110,
    resizeMode: 'cover',
    alignSelf: 'flex-end',
    marginTop: -25,
    right:-20
    
  },
  main_heading:{
    color:theme.colors.green,
    fontSize: fontSizes.x_large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 120,
  },
  sub_heading:{
    color:theme.colors.lightGreen,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
  },
  shakcalm:{
    position:"absolute",
    bottom:0,
    height:220,
    resizeMode: 'stretch',
    borderBottomLeftRadius: 50,

  },
});
