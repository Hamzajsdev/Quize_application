import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import {boldFont, fontSizes, mediumFont, regularFont} from './../../assets/Fonts/font';
import fram from '../../assets/images/slideImage/fram.png';
import bg_shap2 from '../../assets/images/slideImage/bg_shap2.jpg';
import theme from '../../common/Theme';
import React from 'react';

const Slide2 = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <ImageBackground
        source={fram}
        style={[styles.fram, {width: width / 1.1, height: height / 1.45}]}>
        <View style={[styles.Description, {width: width / 1.5}]}>
          <Text style={styles.heading}>
            <Text
              style={{
                fontWeight: boldFont.fontWeight,
                fontSize: fontSizes.large,
              }}>
              Gamification can be used to promote
            </Text>{' '}
            Gamification can be used to promote environmentally sustainable
            behavior. Board games are particularly effective at visualizing the
            <Text style={{fontWeight: boldFont.fontWeight}}>
              {' '}
              effects of climate change.
            </Text>
          </Text>
          <Text style={styles.headings}>
            Apps can be used to collect data related to sustainability such as
            <Text style={{fontWeight: boldFont.fontWeight}}>
              {' '}
              travel patterns.
            </Text>
          </Text>
          <Text></Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.content}>#Content/Slide</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Slide2;

const styles = StyleSheet.create({
  fram: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 55,
    alignSelf: 'center',
  },
  Description: {gap: 30, paddingLeft: 10},
  heading: {
    fontSize: fontSizes.x_medium,
    fontWeight: regularFont.fontWeight,
    color: theme.colors.black,
    lineHeight: 25,
  },
  headings: {
    fontSize: fontSizes.x_medium,
    fontWeight: regularFont.fontWeight,
    color: theme.colors.black,
    lineHeight: 25,
  },
  badge:{
   position: 'absolute',
   top: -20, 
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ECFFFB',
   width:200,
   height:50,
   borderTopRightRadius:16,
   borderBottomLeftRadius:16,
   elevation: 5,
   borderColor: theme.colors.lightGreen,
   borderWidth:1.5
  },
  content:{
    color: theme.colors.lightGreen,
    fontSize: fontSizes.medium,
    textTransform: 'uppercase',
    fontWeight: boldFont.fontWeight,
  }
});
