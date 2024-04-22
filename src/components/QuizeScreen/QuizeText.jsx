import {
  Button,
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
import React, {useState} from 'react';
import theme from '../../common/Theme';
import question from '../../assets/icons/question.png';
import LinearGradient from 'react-native-linear-gradient';
import {boldFont, fontSizes, mediumFont} from '../../assets/Fonts/font';
import {CheckIcon, CloseIcon, NativeBaseProvider} from 'native-base';
import {useNavigation} from '@react-navigation/native';


const QuizeText = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionPress = option => {
    setSelectedOption(option);
  };
  const handleClick = () => {
    Navigation.navigate('WinnerQuize');
  };


  return (
    <SafeAreaView style={{marginBottom: 230}}>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.banner}>
        <View style={styles.banner_content}>
          <Text style={styles.banner_text}>Start Quize</Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.text_question}>1/10</Text>
          <Text style={styles.text_question}>Quize Question</Text>
          <Text></Text>
        </View>
      </View>
      <ScrollView>
        <View style={[styles.header, {width: width / 1.1}]}>
          <View style={styles.slider}>
            <View style={styles.inner_slider}>
              <Text style={styles.percentage}>30%</Text>
            </View>
          </View>
          <View>
            <View style={styles.Q_card}>
              <View style={styles.q_marks}>
                <Image source={question} style={styles.questions} />
              </View>
              <Text style={styles.sustain_text}>
                What are the three main Pillers of Sustainability?
              </Text>
            </View>
            <NativeBaseProvider>
              <View style={styles.MCQ_content}>
                <TouchableOpacity
                  style={[
                    styles.option,
                    {
                      backgroundColor:
                        selectedOption === 'True'
                          ? theme.colors.green
                          : '#ECFFFB',
                    },
                  ]}
                  onPress={() => handleOptionPress('True')}>
                  <View style={styles.groups}>
                    <Text style={styles.Q_Text}>
                      Recycling, Composting Your Bike
                    </Text>
                    {selectedOption === 'True' && (
                      <CheckIcon style={styles.CheckIcon} />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.option,
                    {
                      backgroundColor:
                        selectedOption === 'False' ? 'red' : '#ECFFFB',
                    },
                  ]}
                  onPress={() => handleOptionPress('False')}>
                  <View style={styles.groups}>
                    <Text style={styles.Q_Text}>
                      Enviromental, Economic, and Social
                    </Text>
                    {selectedOption === 'False' && (
                      <CloseIcon style={styles.CheckIcon} />
                    )}
                  </View>
                </TouchableOpacity>
                <View style={styles.option}>
                  <Text style={styles.Q_Text}>
                    There are labels to checks the efficiency and disposal index
                  </Text>
                </View>
              </View>
            </NativeBaseProvider>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleClick}>
        <LinearGradient
          style={[styles.main_btn, {width: width / 1.1}]}
          colors={['#66D4BC', '#4faa98', '#338573']}>
          <Text style={styles.btnText}>Submit Answer</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizeText;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.shadGreen,
    elevation: 4,
    padding: 20,
    paddingTop: 25,
  },
  banner_content: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  banner_text: {
    color: theme.colors.green,
    fontSize: fontSizes.x_medium,
    fontWeight: boldFont.fontWeight,
  },
  header: {
    alignSelf: 'center',
    marginTop: 30,
  },
  question: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    padding: 6,
    borderRadius: 30,
    paddingLeft: 20,
    elevation: 5,
    marginTop: 20,
  },
  text_question: {
    color: theme.colors.black,
    fontSize: fontSizes.x_medium,
    fontWeight: mediumFont.fontWeight,
  },
  slider: {
    backgroundColor: theme.colors.shadGreen,
    height: 20,
    borderRadius: 40,
  },
  inner_slider: {
    top: 0,
    backgroundColor: theme.colors.lightGreen,
    height: 20,
    width: 140,
    borderRadius: 30,
  },
  percentage: {
    textAlign: 'right',
    marginRight: 10,
    color: theme.colors.white,
    fontWeight: boldFont.fontWeight,
  },
  Q_card: {
    backgroundColor: theme.colors.white,
    padding: 30,
    marginTop: 50,
    borderWidth: 4,
    borderColor: theme.colors.shadGreen,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 40,
    elevation:5
  },
  questions: {
    width: 40,
    height: 40,
    resizeMode: 'stretch',
  },
  q_marks: {
    backgroundColor: theme.colors.lightGreen,
    width: 60,
    height: 60,
    borderRadius: 100,
    position: 'absolute',
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: theme.colors.white,
    borderWidth: 4,
  },
  sustain_text: {
    textAlign: 'center',
    color: theme.colors.black,
    fontSize: fontSizes.x_large,
    fontWeight: mediumFont.fontWeight,
  },

  MCQ_content: {
    marginTop: 20,
    gap: 15,
    marginBottom: 40,
  },
  main_btn: {
    position: 'absolute',
    bottom: -70,
    backgroundColor: theme.colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
    height: 48,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: fontSizes.medium,
    fontWeight: mediumFont.fontWeight,
  },
  option: {
    backgroundColor: '#ECFFFB',
    padding: 15,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: theme.colors.white,
    borderWidth: 4,
    elevation: 5,
  },
  groups: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  Q_Text: {
    color: theme.colors.black,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: boldFont.fontWeight,
  },
  CheckIcon: {
    color: theme.colors.white,
    height: 40,
    width: 30,
  },
});
