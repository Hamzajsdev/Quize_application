import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import theme from '../../common/Theme';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import medal from '../../assets/icons/medal.png';
import coins from '../../assets/icons/coins.png';
import discounts from '../../assets/images/Innonation/discounts.png';
import Swiper from 'react-native-swiper';
import loyalty from '../../assets/images/discount/loyalty.jpg';
import loyalImg from '../../assets/images/discount/loyalImg.jpg';
import position from '../../assets/images/discount/position.jpg';
import customer from '../../assets/images/discount/customer.jpg';
import benifitQ from '../../assets/images/discount/benifitQ.jpg';
import financial from '../../assets/images/discount/financial.jpg';
import f_product1 from '../../assets/images/discount/f_product1.png';
import tier from '../../assets/images/discount/tier.png';
import paid from '../../assets/images/discount/paid.png';
import value from '../../assets/images/discount/value.png';
import retention from '../../assets/images/discount/retention.png';
import brand from '../../assets/images/discount/brand.png';
import order from '../../assets/images/discount/order.png';
import Financialcustomer from '../../assets/images/discount/Financialcustomer.png';
import {SliderBox} from 'react-native-image-slider-box';

const imagSlider = [
  require('../../assets/images/discount/bannerFinancial.jpg'),
  require('../../assets/images/discount/Fgamification.jpg'),
  require('../../assets/images/discount/FElements.png'),
];

const Discount = () => {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Loyalify</Text>
          <Image source={medal} style={styles.medal} />
        </View>

        <View style={[styles.coins_container, {width: width / 1.1}]}>
          <View style={styles.card}>
            <View style={styles.card_content}>
              <Image source={coins} style={styles.coins} />
              <View>
                <Text style={styles.sm_text}>Your Points</Text>
                <Text style={styles.coins_no}>
                  3,4500{' '}
                  <Text
                    style={{
                      fontSize: fontSizes.small,
                      color: theme.colors.lightGreen,
                    }}>
                    ($23,908)
                  </Text>{' '}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mb_bottom}>
          <View style={[styles.bannerCard, {width: width / 1.1}]}>
            <View style={styles.shap1}></View>
            <View style={styles.shap2}></View>
            <View style={[styles.content_shap, {width: width / 2}]}>
              <View>
                <View style={styles.coupen}>
                  <Image source={discounts} style={styles.discounts} />
                </View>
                <Text style={styles.banner_text}>Coupon</Text>
              </View>
              <View>
                <View style={styles.coupen}>
                  <Image source={medal} style={styles.discounts} />
                </View>
                <Text style={styles.banner_text}>Earn Points</Text>
              </View>
            </View>
            <View style={[styles.content_shap, {width: width / 2}]}>
              <View>
                <Text style={styles.coupons}>256</Text>
                <Text style={styles.banner_text}>Your points</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.coupons}>$250</Text>
                <Text style={styles.banner_text}>Save Money</Text>
              </View>
            </View>
          </View>
          <View style={[styles.popular, {width: width / 1.1}]}>
            <View style={styles.popular_content}>
              <Text style={styles.popular_text}>Popular Brands</Text>
              <Text style={styles.view}>View All</Text>
            </View>
            <Swiper showsPagination={false}>
              <View style={styles.sm_cardContent}>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={loyalty} style={styles.loyalty} />
                </View>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={loyalImg} style={styles.loyalty} />
                </View>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={position} style={styles.loyalty} />
                </View>
              </View>

              <View style={styles.sm_cardContent}>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={customer} style={styles.loyalty} />
                </View>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={benifitQ} style={styles.loyalty} />
                </View>
                <View style={[styles.sm_card, {width: width / 3.65}]}>
                  <View style={styles.badge_discount}>
                    <Text style={styles.badge_textDiscount}>5% off </Text>
                  </View>
                  <Image source={financial} style={styles.loyalty} />
                </View>
              </View>
            </Swiper>

            <View style={styles.slider_content}>
              <SliderBox
                images={imagSlider}
                style={[styles.sliderBox, {width: width / 1.1}]}
                dotColor="#66D4BC"
                inactiveDotColor="#338573"
                dotStyle={{
                  borderRadius: 50,
                  top: 40,
                  marginHorizontal: -5,
                  width: 10,
                  height: 10,
                }}
                autoplay={true}
                circleLoop={true}
                firstItem={1}
                resizeMode="stretch"
              />
            </View>

            <View style={[styles.discount_container, {width: width / 1.1}]}>
              <Text style={styles.big_discount}>Discount Products</Text>
              <View style={styles.discount_container_fluid}>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={f_product1} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Points Program</Text>
                  </View>
                </View>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={tier} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Tier Program</Text>
                  </View>
                </View>
              </View>
              <View style={styles.discount_container_fluid}>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={paid} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Paid Program</Text>
                  </View>
                </View>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={value} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Value Program</Text>
                  </View>
                </View>
              </View>
              <View style={styles.discount_container_fluid}>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={retention} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Retention Rate</Text>
                  </View>
                </View>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={brand} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Brand Advocacy</Text>
                  </View>
                </View>
              </View>
              <View style={styles.discount_container_fluid}>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image source={order} style={styles.f_product1} />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Order value</Text>
                  </View>
                </View>
                <View style={[styles.discount_card, {width: width / 2.35}]}>
                  <View style={styles.discount_header}>
                    <Text style={styles.discount_text}> 5% {'\n'} Off </Text>
                  </View>
                  <View style={styles.inner_content}>
                    <Image
                      source={Financialcustomer}
                      style={styles.f_product1}
                    />
                    <View style={styles.border_bottom}></View>
                    <Text style={styles.card_text}>Customer</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  mb_bottom: {
    marginBottom: 690,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  medal: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  coins_container: {
    alignSelf: 'center',
  },
  card: {
    backgroundColor: theme.colors.white,
    height: 70,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 30,
    marginTop: 20,
    justifyContent: 'center',
    paddingLeft: 15,
    borderColor: theme.colors.lightGreen,
    borderWidth: 1.5,
    elevation: 5,
  },
  coins: {
    width: 45,
    height: 45,
    resizeMode: 'stretch',
  },
  card_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  sm_text: {
    color: theme.colors.black,
    fontSize: fontSizes.x_small,
    fontWeight: mediumFont.fontWeight,
  },
  coins_no: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  bannerCard: {
    marginTop: 30,
    backgroundColor: theme.colors.white,
    elevation: 5,
    height: 220,
    alignSelf: 'center',
    borderColor: theme.colors.shadGreen,
    borderWidth: 5,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    gap: 15,
  },
  shap1: {
    backgroundColor: theme.colors.lightGreen,
    position: 'absolute',
    right: 0,
    width: 30,
    height: 30,
    borderBottomLeftRadius: 30,
  },
  shap2: {
    backgroundColor: theme.colors.lightGreen,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 30,
    height: 30,
    borderTopRightRadius: 30,
  },
  content_shap: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  coupen: {
    backgroundColor: theme.colors.shadGreen,
    width: 45,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.lightGreen,
    borderWidth: 1.5,
    elevation: 5,
    alignSelf: 'center',
  },
  discounts: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  banner_text: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    marginTop: 5,
  },
  coupons: {
    color: theme.colors.green,
    fontSize: fontSizes.x_large,
    fontWeight: boldFont.fontWeight,
  },
  popular: {
    alignSelf: 'center',
    marginTop: 32,
  },
  popular_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  popular_text: {
    fontSize: 23,
    color: theme.colors.black,
    fontWeight: boldFont.fontWeight,
  },
  view: {
    color: theme.colors.green,
    fontSize: 16,
    fontWeight: mediumFont.fontWeight,
  },
  loyalty: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 100,
  },
  sm_card: {
    backgroundColor: theme.colors.lightGreen,
    elevation: 5,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderColor: theme.colors.shadGreen,
    borderWidth: 2,
  },
  sm_cardContent: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 25,
  },
  sliderBox: {
    height: 211,
    marginTop: 14,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  slider_content: {
    position: 'absolute',
    marginTop: 170,
  },
  discount_container: {
    position: 'absolute',
    marginTop: 470,
    gap: 20,
  },
  discount_card: {
    height: 150,
    backgroundColor: theme.colors.shadGreen,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderWidth: 3,
    borderColor: theme.colors.white,
    elevation: 5,
  },
  discount_header: {
    position: 'absolute',
    right: 0,
    width: 45,
    height: 45,
    backgroundColor: theme.colors.lightGreen,
    borderBottomLeftRadius: 30,
    paddingLeft: 13,
    paddingTop: 4,
  },
  discount_text: {
    color: theme.colors.white,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  inner_content: {
    padding: 15,
    marginTop: 10,
  },
  f_product1: {
    width: 80,
    height: 70,
    resizeMode: 'stretch',
  },
  card_text: {
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: boldFont.fontWeight,
  },
  border_bottom: {
    borderWidth: 1,
    borderColor: theme.colors.lightGreen,
    marginTop: 10,
    marginBottom: 6,
    borderRadius: 50,
  },
  discount_container_fluid: {
    flexDirection: 'row',
    gap: 15,
  },
  badge_discount: {
    position: 'absolute',
    top: -10,
    alignSelf: 'center',
    zIndex: 99,
    borderWidth: 2,
    borderColor: theme.colors.lightGreen,
    backgroundColor: theme.colors.shadGreen,
    paddingLeft: 7,
    elevation: 4,
    paddingRight: 6,
    height: 22,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge_textDiscount: {
    color: theme.colors.black,
    fontSize: fontSizes.small,
    fontWeight: boldFont.fontWeight,
  },
  big_discount: {
    color: theme.colors.black,
    fontSize: 23,
    fontWeight: boldFont.fontWeight,
  },
});
