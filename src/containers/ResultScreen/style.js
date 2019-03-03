import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#4caf50',
    // justifyContent: 'center',
    alignItems: 'center',


  },
  failedText: {

    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: wp('7%'),
    marginBottom: hp('17%'),


  },
  failedContainer: {

    flex: 1,
    backgroundColor: '#E53935',
    alignItems: 'center',

  },
  congratz: {
    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: wp('7%'),
    marginBottom: hp('33%'),

  },
  ohnoText: {

    fontSize: 28,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingBottom: '5%',


  },


});

export default styles;
