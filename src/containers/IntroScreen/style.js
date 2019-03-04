import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
    fontSize: wp('5%'),

  },
  title: {
    fontSize: wp('7.2%'),
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingTop: hp('3%'),

  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: wp('4%'),
    marginBottom: hp('8%'),
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: -hp('4%'),
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('5%'),

  },
});

export default styles;
