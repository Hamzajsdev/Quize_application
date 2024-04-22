import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  useWindowDimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import theme from '../../common/Theme';
import thumbs from '../../assets/icons/thumbs.png';
import download from '../../assets/icons/download.png';
import img1 from '../../assets/images/slideImage/ocean.jpg';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';
import Slide7 from './Slide7';

const Slide1 = () => {
  const {width, height} = useWindowDimensions();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.lightGreen}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <View style={styles.cross}>
              <Text style={styles.backButtonText}>×</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Content Slide</Text>
          </View>
          <View style={styles.iconContent}>
            <Image source={thumbs} style={styles.icons} />
          </View>
          <View style={styles.iconContent}>
            <Image source={download} style={styles.icons} />
          </View>
        </View>

        <View style={styles.line}></View>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          dotStyle={{
            backgroundColor: theme.colors.lightGreen,
            width: 30,
            height: 3,
          }}
          activeDotStyle={{
            width: 30,
            height: 4,
            backgroundColor: theme.colors.green,
          }}>
          <View style={styles.slide}>
            <View
              style={[styles.card, {width: width / 1.1, height: height / 1.5}]}>
              <Image
                source={img1}
                style={[
                  styles.slideImg,
                  {width: width / 1.1, height: height / 2.5},
                ]}
              />
              <View style={styles.text_content}>
                <Text style={styles.main_heading}>Open Ocean</Text>
                <Text style={styles.sub_heading}>
                  The pelagic zone, also know as the open ocean, is the area of
                  Ocean outside of coastal areas{' '}
                </Text>
              </View>
              <View style={styles.sliderContent}>
                <Text style={styles.slideBadge}>#water/ocean</Text>
              </View>
            </View>
          </View>

          <View style={styles.slide}>
            <Slide2 />
          </View>
          <View style={styles.slide}>
            <Slide3 />
          </View>
          <View style={styles.slide}>
            <Slide4 />
          </View>
          <View style={styles.slide}>
            <Slide5 />
          </View>
          <View style={styles.slide}>
            <Slide6 />
          </View>
          <View style={styles.slide}>
            <Slide7 />
          </View>
        </Swiper>
      </View>
    </>
  );
};

export default Slide1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGreen,
    padding: 15,
    gap: 10,
    elevation: 5,
  },
  cross: {
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: theme.colors.green,
    marginTop: -2,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: mediumFont.fontWeight,
  },
  line: {
    height: 1,
    backgroundColor: theme.colors.green,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECFFFB',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconContent: {
    backgroundColor: theme.colors.white,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  icons: {
    width: 20,
    height: 20,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 130,
    borderTopRightRadius: 130,
    elevation: 5,
    padding: 10,
    borderWidth:2,
    borderColor:'#ECFFFB',
  },
  slideImg: {
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    position: 'absolute',
    bottom: 0,
  },
  sliderContent: {
    position: 'absolute',
    top: -25,
    backgroundColor: theme.colors.lightGreen,
    width: 170,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius:16,
    borderBottomLeftRadius:16,
    elevation: 5,
    alignSelf: 'center',
  },
  slideBadge: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    textTransform: 'uppercase',
    fontWeight: mediumFont.fontWeight,
  },
  text_content: {
    padding: 30,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_heading: {
    fontSize: fontSizes.large,
    color: theme.colors.green,
    fontWeight: boldFont.fontWeight,
  },
  sub_heading: {
    fontSize: fontSizes.medium,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
    textAlign: 'center',
  },
});
