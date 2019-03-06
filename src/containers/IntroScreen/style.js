import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: wp('6%'),
    marginTop: hp('4%')

  },
  title: {
    fontSize: wp('7.2%'),
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingTop: hp('20%'),

  },
  textContainer: {
    flex: 5,
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    marginBottom: hp('3%'),
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: -hp('4%'),
  },
  iconContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -hp('20%')
  },
  titleContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  nextSkipContainer: {
    alignItems: 'center',
    width: wp('100%'),
    zIndex: 3,
    position:'absolute',
    backgroundColor:'transparent',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: wp('7%'),
    paddingTop: hp('75%')

  },
  sideButton: {

      height: hp('10%')
  },
  nextText: {

    fontSize: wp('5%'),
    color: '#fff',


  },
  skipText: {

    fontSize: wp('5%'),
    color: '#fff',


  },
});

export default styles;
