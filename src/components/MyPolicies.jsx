import {
  Image,
  SafeAreaView,
  ScrollView,
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
import {boldFont, mediumFont} from '../assets/Fonts/font';
import medical from '../assets/images/Insurance/medical.png';
import secure from '../assets/images/Insurance/secure.png';
import patient from '../assets/images/Insurance/patient.png';
import {fontSizes} from './../assets/Fonts/font';

const MyPolicies = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handleSubmit = () => {
    Navigation.navigate('Insurance');
  };
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.banner}>
        <View style={styles.banner_content}>
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.banner_text}>Insurance Policies</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.policies_container, {width: width / 1.1}]}>
          <Text style={styles.policies}>3 Insurance Policies</Text>
          <View style={styles.cards}>
            <View style={styles.content_between}>
              <View>
                <Text style={styles.plan}>Health Insurance Plan</Text>
                <Text style={styles.no}>656465432</Text>
              </View>
              <View style={styles.logo}>
                <Image source={medical} style={styles.medical} />
              </View>
            </View>
            <View style={{marginTop: 30, gap: 14}}>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Policy Value</Text>
                  <Text style={styles.policyno}>$ 10,356.78</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>contribution</Text>
                  <Text style={styles.policyno}>Employee</Text>
                </View>
              </View>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Status</Text>
                  <Text style={styles.policyno}>In Force</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>Total contribution</Text>
                  <Text style={styles.policyno}>$ 42,765.90</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.content_between}>
              <View>
                <Text style={styles.plan}>Term Insurance Plan</Text>
                <Text style={styles.no}>656465432</Text>
              </View>
              <View style={styles.logo}>
                <Image source={secure} style={styles.medical} />
              </View>
            </View>
            <View style={{marginTop: 30, gap: 14}}>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Policy Value</Text>
                  <Text style={styles.policyno}>$ 10,356.78</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>contribution</Text>
                  <Text style={styles.policyno}>Employee</Text>
                </View>
              </View>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Status</Text>
                  <Text style={styles.policyno}>In Force</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>Total contribution</Text>
                  <Text style={styles.policyno}>$ 42,765.90</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.content_between}>
              <View>
                <Text style={styles.plan}>Medical Insurance Plan</Text>
                <Text style={styles.no}>656465432</Text>
              </View>
              <View style={styles.logo}>
                <Image source={patient} style={styles.medical} />
              </View>
            </View>
            <View style={{marginTop: 30, gap: 14}}>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Policy Value</Text>
                  <Text style={styles.policyno}>$ 10,356.78</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>contribution</Text>
                  <Text style={styles.policyno}>Employee</Text>
                </View>
              </View>
              <View style={[styles.content_between]}>
                <View>
                  <Text style={styles.policyPlan}>Status</Text>
                  <Text style={styles.policyno}>In Force</Text>
                </View>
                <View>
                  <Text style={styles.policyPlan}>Total contribution</Text>
                  <Text style={styles.policyno}>$ 42,765.90</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPolicies;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.shadGreen,
    height: 80,
    elevation: 3,
    padding: 20,
    paddingTop: 25,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  banner_content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  banner_text: {
    color: theme.colors.green,
    fontSize: 22,
    fontWeight: mediumFont.fontWeight,
  },
  policies_container: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom:120
  },
  policies: {
    textAlign: 'center',
    color: theme.colors.black,
    fontSize: 22,
    fontWeight: mediumFont.fontWeight,
  },
  cards: {
    backgroundColor: theme.colors.white,
    borderWidth: 3,
    borderColor: theme.colors.shadGreen,
    marginTop: 10,
    padding: 20,
    paddingTop: 20,
    elevation: 5,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  content_between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: theme.colors.shadGreen,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderWidth: 1.5,
    borderColor: theme.colors.lightGreen,
    borderTopLeftRadius:12,
    borderBottomRightRadius:12,
  },
  medical: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  plan: {
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: boldFont.fontWeight,
  },
  no: {
    color: theme.colors.lightGreen,
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
  },
  policyPlan: {
    color: 'gray',
    fontSize: 12,
    fontWeight: mediumFont.fontWeight,
    textTransform: 'uppercase',
  },
  policyno: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
});
