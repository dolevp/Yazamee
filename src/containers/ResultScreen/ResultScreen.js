/*jshint esversion: 6*/
import React, {Component} from 'react';
import { StyleSheet, View, Text, Dimensions, Animated, Linking} from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import Slider from 'react-native-slider';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




class ResultScreen extends React.Component{

  constructor(props){
    super(props);


  }


  render(){

    if(this.props.success) {
    return (

      <View style={styles.container}>
        <Animatable.Text animation="rotate" delay={3000} iterationCount='infinite' duration={3000} style={{paddingTop: '20%', paddingBottom: '5%'}}>

          <Icon name="lightbulb-o" size={200} color="#fff" />

        </Animatable.Text>
        <Animatable.Text animation="tada" style = {styles.congratz}>
        ברכות, נמצאת מתאים להיות יזם!
        </Animatable.Text>
        <Animatable.View animation="bounceInRight" delay={2300} duration={1400} style={{flex: 5, paddingLeft: wp('20%'), paddingHorizontal: wp('20%'), position: 'absolute',  paddingTop: hp('45%'), flexDirection: 'row', alignItems:'space-between'}}>

          <AntIcon name="rocket1" size={wp('10%')} color="#FFF" style={{flex: 1}}/>
          <AntIcon name="arrowleft" size={wp('10%')} color="#FFF" style={{flex: 1}}/>
          <AntIcon name="tool" size={wp('10%')} color="#FFF" style={{flex: 1}}/>
          <AntIcon name="arrowleft" size={wp('10%')} color="#FFF" style={{flex: 1}}/>
          <MaterialIcon name="coffee-outline" size={wp('12%')} color="#FFF" style={{flex: 1}}/>


        </Animatable.View>

        <Animatable.Text animation="bounceInRight" delay={1000} duration={1400} style={{flex: 0, color: '#fff', fontSize: wp('4.5%'), fontWeight:'700', textAlign:'center', position:'absolute', paddingHorizontal: wp('6%'), paddingTop: hp('55%')}}>
        בוא נשב על כוס קפה ונמריא את העסק שלך!
        </Animatable.Text>

        <Animatable.View animation="bounce" iterationCount={1} delay={4000} style={{flex: 1, paddingTop: hp('12%')}}>
        <FeatherIcon.Button borderRadius={wp('60%')} name="send" backgroundColor='white' size={wp('6%')} iconStyle={{color: '#4caf50'}} onPress={() => Linking.openURL('mailto:26moti@walla.com')}>
          <Text style={{fontSize: wp('4%'), paddingHorizontal: wp('3%'), color: '#4caf50'}}>
            נשמע מתאים, שלח אימייל!
          </Text>
        </FeatherIcon.Button>
        </Animatable.View>
      </View>



    );

  }

  return(

    <View style={styles.failedContainer}>
      <Animatable.Text animation="rotate" delay={3000} iterationCount='infinite' duration={3000} style={{paddingTop: '20%', paddingBottom: '5%'}}>

        <AntIcon name="closecircleo" size={200} color="#fff" />

      </Animatable.Text>
      <Animatable.Text animation="tada" style = {styles.failedText}>
      על פי החישובים שלנו, אתה לא מתאים להיות יזם. אבל היי - עדיין תוכל להקים עסק מצליח!
      </Animatable.Text>


      <Animatable.Text animation="bounceInRight" delay={1000} duration={1400} style={{flex: 0, color: '#fff', fontSize: wp('4.7%'), fontWeight:'700', position:'absolute', paddingTop: hp('60%') }}>
      בוא נשב על כוס קפה ונשפר את המצב!
      </Animatable.Text>

      <Animatable.View animation="bounce" iterationCount={1} delay={4000} style={{paddingTop: hp('10%')}}>
      <FeatherIcon.Button name="send" backgroundColor='white' borderRadius={wp('60%')} size={wp('6%')} iconStyle={{color: '#E53935'}} onPress={() => Linking.openURL('mailto:26moti@gmail.com')}>
        <Text style={{fontSize: wp('4%'), paddingHorizontal: wp('3%'), color: '#E53935'}}>
          נשמע מתאים, שלח אימייל!
        </Text>
      </FeatherIcon.Button>
      </Animatable.View>
    </View>







  );
}


}

export default ResultScreen;


const styles=StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#4caf50',
    // justifyContent: 'center',
    alignItems: 'center'


  },
  failedText: {

    fontSize: wp('6%'),
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: wp('7%'),
    marginBottom: hp('17%')


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
    marginBottom: hp('18%'),

  },
  ohnoText: {

    fontSize: 28,
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: '10%',
    paddingBottom:'5%',


  },


});
