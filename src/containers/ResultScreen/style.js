import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    // justifyContent: 'center',


  },
  failedText: {

    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',


  },
  failedContainer: {

    flex: 1,
    backgroundColor: '#E53935',
    alignItems: 'center',

  },
  congratzView: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('9%'),
    marginVertical: -hp('10%'),
    paddingTop: hp('3%'),

  },
  resultIconView: {

    flex: 1,
    marginHorizontal: wp('20%'),
    paddingTop: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,


  },
  iconListView: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('54%'),

  },
  actionText: {

    color: '#fff',
    fontSize: wp('5'),
    textAlign: 'center',
    marginTop: -hp('50%'),
  },
  actionView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -hp('40%'),
    paddingHorizontal: wp('8%'),

  },
  congratz: {
    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: hp('15%'),


  },
  ohnoText: {

    fontSize: 28,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingBottom: '5%',


  },
  buttonView: {

    position: 'absolute',
    paddingBottom: hp('15%'),

  },
  failedView: {
    flex: 0.8,
    marginTop: hp('25%'),
    marginBottom: hp('30%'),
    alignItems: 'center',
    paddingBottom: hp('10%'),
    justifyContent: 'center',
    marginTop: hp('1%'),


  },


});

export default styles;
