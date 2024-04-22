import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Checkbox, NativeBaseProvider} from 'native-base';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import {SliderBox} from 'react-native-image-slider-box';
import leaf from '../../assets/images/leafFlower.png';
import theme from '../../common/Theme';
import food from '../../assets/images/food2.jpg';
import clock from '../../assets/images/clock.png';
import flower from '../../assets/images/flower.jpg';
import handshak from '../../assets/images/handshak.jpg';
import centro from '../../assets/images/centro.png';
import sustainCard from '../../assets/images/sustainCard.jpg';
import goal from '../../assets/images/goal.png';
import nullflower from '../../assets/images/nullflowers.jpg';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';
import community from '../../assets/images/communitys.jpg';

const imagSlider = [
  require('../../assets/images/insurance1.jpg'),
  require('../../assets/images/act.jpg'),
  require('../../assets/images/sustain.jpg'),
];

const Home = () => {
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Slide1');
  };
  const handleClick = () => {
    Navigation.navigate('AllCommunity');
  };
  
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <ScrollView>
        <View style={{marginBottom: 60}}>
          <LinearGradient
            colors={['#338573', '#66D4BC', '#4faa98']}
            style={[styles.banner, {width: width / 1.2}]}>
            <View style={styles.container}>
              <View>
                <Text style={styles.sm_heading}>Hello</Text>
                <Text style={styles.heading}>Muhammad</Text>
              </View>
              <View style={{gap: 3}}>
                <Text style={styles.sm_heading}>Level 1</Text>
                <View style={styles.badge}>
                  <Text style={{color: theme.colors.green}}>1</Text>
                  <Image source={leaf} style={{width: 15, height: 15}} />
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={{width: width / 1.1, alignSelf: 'center'}}>
            <View style={[styles.steps_card]}>
              <View style={styles.heading_container}>
                <Text style={styles.lg_heading}>Your first Steps</Text>
                <Text style={styles.md_heading}>
                  Discover what you can do in Quize-App
                </Text>
              </View>
              <NativeBaseProvider>
                <View>
                  <View style={styles.check_box}>
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="checkbox"></Checkbox>
                    <Text style={styles.check_text}>Account created</Text>
                  </View>
                  <View style={styles.check_box}>
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="checkbox"></Checkbox>
                    <Text style={styles.check_text}>
                      Successfully complate an episode
                    </Text>
                  </View>
                  <View style={styles.check_box}>
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="checkbox"></Checkbox>
                    <Text style={styles.check_text}>
                      Start calculating your impact
                    </Text>
                  </View>
                  <View style={styles.check_box}>
                    <Checkbox
                      shadow={2}
                      value="test"
                      accessibilityLabel="checkbox"></Checkbox>
                    <Text style={styles.check_text}>Log a saved action</Text>
                  </View>
                </View>
              </NativeBaseProvider>
            </View>

            <View>
              <Text style={styles.content_text}>Content for you</Text>
              <View style={[styles.container]}>
                <Swiper style={styles.wrapper} showsPagination={false}>
                  <View style={[styles.min_card, {marginTop: 30}]}>
                    <TouchableOpacity onPress={handlePress}>
                      <View>
                        <Image
                          source={food}
                          style={[styles.food, {width: width / 2.35}]}
                        />
                        <View style={[styles.badges, {width: width / 4}]}>
                          <Image source={clock} style={styles.icons} />
                          <Text style={styles.hr_text}>-5 hr</Text>
                        </View>
                        <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                          The Veined Rapa
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View>
                      <Image
                        source={nullflower}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        We did you do this morning
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.min_card, {marginTop: 30}]}>
                    <View>
                      <Image
                        source={flower}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        Our mission
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={handshak}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        Our business Card
                      </Text>
                    </View>
                  </View>
                </Swiper>
              </View>

              <View style={[styles.container]}>
                <Swiper style={styles.wrapper} showsPagination={false}>
                  <View style={[styles.min_card, {marginTop: 30}]}>
                    <View>
                      <Image
                        source={food}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.badges, {width: width / 4}]}>
                        <Image source={clock} style={styles.icons} />
                        <Text style={styles.hr_text}>-5 hr</Text>
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        The Veined Rapa Whelk{' '}
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={nullflower}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        We did you do this morning
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.min_card, {marginTop: 30}]}>
                    <View>
                      <Image
                        source={flower}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        Our mission
                      </Text>
                    </View>
                    <View>
                      <Image
                        source={handshak}
                        style={[styles.food, {width: width / 2.35}]}
                      />
                      <View style={[styles.sm_badges, {width: width / 4}]}>
                        <Text style={styles.sm_text}>50</Text>
                        <Image source={leaf} style={styles.leaficons} />
                      </View>
                      <Text style={[styles.min_CardTxt, {width: width / 3}]}>
                        Our business Card
                      </Text>
                    </View>
                  </View>
                </Swiper>
              </View>
            </View>

            <View style={[styles.head_cards, {width: width / 1.1}]}>
              <View style={[styles.lg_card]}>
                <Text style={styles.lg_text}>Challenges</Text>
                <Text style={styles.sm_text}>View all</Text>
              </View>
              <View>
                <SliderBox
                  images={imagSlider}
                  style={[styles.sliderBox, {width: width / 1.1}]}
                  dotColor="#66D4BC"
                  inactiveDotColor="#338573"
                  dotStyle={{
                    borderRadius: 50,
                    top: 40,
                    marginHorizontal: -5,
                    width: 13,
                    height: 8,
                  }}
                  autoplay={true}
                  circleLoop={true}
                  firstItem={1}
                  resizeMode="stretch"
                />
              </View>
            </View>
            <View style={[styles.head_Swipcards, {width: width / 1.1}]}>
              <View style={[styles.lg_card]}>
                <Text style={styles.lg_text}>News</Text>
              </View>
            </View>
            <Swiper
              style={[styles.wrappers]}
              dotStyle={{top: 40, backgroundColor: theme.colors.green}}
              activeDotStyle={{
                top: 40,
                width: 30,
                backgroundColor: theme.colors.lightGreen,
              }}>
              <View>
                <View style={[styles.custom_card, {width: width / 1.15}]}>
                  <View style={styles.bodyCard}>
                    <Text style={styles.discover}>Discovery</Text>
                    <Text style={[styles.body_text, {width: width / 2.5}]}>
                      Una Nessuna, Centomila
                    </Text>
                  </View>
                  <Image source={centro} style={[styles.custom_img]} />
                </View>
              </View>

              <View>
                <View style={[styles.custom_card, {width: width / 1.15}]}>
                  <View style={styles.bodyCard}>
                    <Text style={styles.discover}>Learn</Text>
                    <Text style={[styles.body_text, {width: width / 2.5}]}>
                      Sustainability? What is it all about
                    </Text>
                  </View>
                  <Image source={sustainCard} style={[styles.custom_img]} />
                </View>
              </View>

              <View>
                <View style={[styles.custom_card, {width: width / 1.15}]}>
                  <View style={styles.bodyCard}>
                    <Text style={styles.discover}>Learn</Text>
                    <Text style={[styles.body_text, {width: width / 2.5}]}>
                      Sustainable Development Goals
                    </Text>
                  </View>
                  <Image source={goal} style={[styles.custom_img]} />
                </View>
              </View>
            </Swiper>
          </View>
          <View style={[styles.head_Swipercards, {width: width / 1}]}>
            <View style={[styles.lg_card, {alignSelf: 'center'}]}>
              <LinearGradient
                colors={['#338573', '#66D4BC', '#4faa98']}
                style={[styles.bannerCard, {width: width / 1.2}]}>
                <View style={[styles.container]}>
                  <View>
                    <Text style={styles.heading}>19,811,270</Text>
                    <Text style={[styles.sm_headings, {width: width / 1.3}]}>
                      Climate action around the world
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </View>

          <View>
            <Text style={styles.lg_community}>[ Community ]</Text>
            <View style={[styles.shaps1, {width: width / 4}]}></View>
            <View style={[styles.shaps2, {width: width / 4}]}></View>
            <View style={[styles.community_content, {width: width / 1.1}]}>
              <Image source={community} style={styles.profile} />
              <View style={styles.text_innovation}>
                <Text style={styles.md_innovation}>Innovation Zero 2024</Text>
                <Text style={styles.sm_innovation}>Public team</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleClick}>
            <View style={[styles.communit_btn, {width: width / 2}]}>
              <Text style={styles.community_text}>View Community</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 75,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingLeft: 15,
    paddingRight: 25,
    paddingTop: 10,
    marginTop: 30,
  },
  bannerCard: {
    height: 80,
    borderRadius: 40,
    paddingLeft: 15,
    paddingRight: 25,
    paddingTop: 10,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  sm_heading: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
  },
  sm_headings: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    textAlign: 'center',
  },
  heading: {
    color: theme.colors.white,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  steps_card: {
    height: 300,
    borderWidth: 2,
    borderColor: theme.colors.lightGreen,
    alignSelf: 'center',
    backgroundColor: '#ECFFFB',
    paddingLeft: 12,
    paddingTop: 14,
    paddingRight: 12,
    marginTop: 30,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
  },
  steps_cards: {
    height: 300,
    borderWidth: 1.5,
    borderColor: theme.colors.green,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#ECFFFB',
    paddingLeft: 12,
    paddingTop: 14,
    paddingRight: 12,
    marginTop: 30,
  },

  lg_heading: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  md_heading: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
  },
  heading_container: {
    gap: 2,
  },
  check_box: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  check_text: {
    color: theme.colors.black,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  content: {
    alignSelf: 'center',
    marginTop: 50,
  },
  min_card: {
    flexDirection: 'row',
    gap: 20,
  },
  food: {
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  content_text: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    paddingTop: 50,
  },
  lg_text: {
    color: theme.colors.black,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  badges: {
    backgroundColor: theme.colors.lightGreen,
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25,
    flexDirection: 'row',
    gap: 6,
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  hr_text: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  min_CardTxt: {
    color: theme.colors.black,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: -10,
  },
  leaficons: {
    width: 30,
    height: 20,
    resizeMode: 'stretch',
  },
  sm_badges: {
    borderWidth: 1,
    borderColor: theme.colors.green,
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 25,
    flexDirection: 'row',
    gap: 6,
  },
  sm_text: {
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  lg_card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  head_cards: {
    marginTop: 50,
    alignSelf: 'center',
  },
  head_Swipcards: {
    marginTop: 60,
    alignSelf: 'center',
  },
  head_Swipercards: {
    marginTop: 50,
  },
  wrapper: {
    height: 240,
    gap: 8,
  },
  wrappers: {
    height: 240,
    gap: 3,
  },
  sliderBox: {
    height: 211,
    marginTop: 15,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  custom_card: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 18,
    borderBottomRightRadius: 18,
    padding: 16,
    height: 200,
    elevation: 3,
    marginTop: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyCard: {
    gap: 70,
  },
  discover: {
    fontSize: fontSizes.small,
    color: theme.colors.black,
    marginTop: 10,
  },
  body_text: {
    width: '65%',
    fontSize: fontSizes.medium,
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  custom_img: {
    width: 140,
    height: 160,
    borderTopLeftRadius: 120,
    borderBottomLeftRadius: 120,
    backgroundColor: 'white',
  },

  lg_community: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
    textAlign: 'center',
    marginTop: 30,
  },
  community_content: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    alignSelf: 'center',
    position: 'absolute',
    top: 120,
    borderWidth: 5,
    borderColor: theme.colors.shadGreen,
    padding: 15,
  },
  shaps1: {
    backgroundColor: 'pink',
    height: 90,
    alignSelf: 'flex-end',
    marginTop: 30,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  shaps2: {
    backgroundColor: theme.colors.lightGreen,
    height: 90,
    alignSelf: 'flex-start',
    marginTop: 30,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text_innovation: {
    alignSelf: 'center',
    gap: 2,
    marginTop: 8,
  },
  md_innovation: {
    textAlign: 'center',
    fontSize: fontSizes.medium,
    color: 'gray',
    color: theme.colors.black,
    fontWeight: mediumFont.fontWeight,
  },
  sm_innovation: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    color: theme.colors.lightGreen,
  },
  communit_btn: {
    backgroundColor: theme.colors.shadGreen,
    height: 55,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: theme.colors.lightGreen,
  },
  community_text: {
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
});
