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
import {useNavigation} from '@react-navigation/native';
import {boldFont, fontSizes, mediumFont} from '../assets/Fonts/font';
import backErrow from '../assets/icons/backErrow.png';
import communityImg from '../assets/images/communityImg.png';
import theme from '../common/Theme';
import SwiperFlatList from 'react-native-swiper-flatlist';

const AllCommunity = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  const handlePress = () => {
    Navigation.navigate('Home');
  };

  renderCard = ({item}) => {
    return (
      <View style={[styles.card, {width: width / 2.6}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const data = [
    {
      id: 1,
      title: 'Innovation zero 2024',
      description: 'Public team',
      image: require('../assets/images/Innonation/climateInno.jpg'),
    },
    {
      id: 2,
      title: 'Milano Cortina 202024',
      description: 'Private team',
      image: require('../assets/images/Innonation/milano.jpg'),
    },
    {
      id: 3,
      title: '#STEMinthecity',
      description: 'Public team',
      image: require('../assets/images/Innonation/mithycity.jpg'),
    },
    {
      id: 4,
      title: 'Circular Health',
      description: 'Public team',
      image: require('../assets/images/Innonation/health.jpg'),
    },
    {
      id: 5,
      title: '#Sustainability Allies',
      description: 'Private team',
      image: require('../assets/images/Innonation/alies.png'),
    },
    {
      id: 6,
      title: 'Activators for Sustainability',
      description: 'Public team',
      image: require('../assets/images/Innonation/activator.jpeg'),
    },
  ];

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.shadGreen}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={[styles.header, {width: width / 1.1}]}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={backErrow} style={styles.backErrow} />
          </TouchableOpacity>
          <Text style={styles.heading}>Community</Text>
          <Text></Text>
        </View>
      </View>

      <View style={[styles.main_header, {width: width / 1.1}]}>
        <View>
          <Text style={styles.lg_text}>Your Community</Text>
          <Image
            source={communityImg}
            style={[styles.communityImg, {width: width / 1.3}]}
          />
          <Text style={styles.team}>Find a Team you love and join it</Text>
        </View>
        <View style={styles.other_community}>
          <Text style={styles.lg_text}>Other Community</Text>
          <SwiperFlatList
            horizontal
            data={data}
            renderItem={this.renderCard}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AllCommunity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.shadGreen,
    elevation: 4,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  backErrow: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  heading: {
    color: theme.colors.green,
    fontSize: fontSizes.large,
    fontWeight: boldFont.fontWeight,
  },
  main_header: {
    alignSelf: 'center',
    marginTop: 30,
  },
  lg_text: {
    color: theme.colors.green,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
    textTransform: 'uppercase',
  },
  communityImg: {
    height: 220,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 10,
  },
  other_community: {
    marginTop: 30,
  },
  card: {
    margin: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: theme.colors.shadGreen,
    borderWidth: 4,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    resizeMode: 'stretch',
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: fontSizes.medium,
    fontWeight: boldFont.fontWeight,
    color: theme.colors.black,
  },
  description: {
    textAlign: 'center',
    fontSize: fontSizes.small,
    fontWeight: mediumFont.fontWeight,
    color: 'gray',
    marginTop: 5,
  },
  team:{
    textAlign:'center',
    color: theme.colors.black,
    fontSize:fontSizes.small,
    fontWeight:mediumFont.fontWeight,
    marginBottom:10
  }
});
