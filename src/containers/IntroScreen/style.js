import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: wp('15%'),
    paddingBottom: hp('18%'),
    fontSize: wp('5.5%'),

  },
  title: {
    fontSize: wp('7.2%'),
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingTop: hp('7%'),

  }
});

export default styles
