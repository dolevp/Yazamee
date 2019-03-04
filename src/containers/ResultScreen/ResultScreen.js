/* jshint esversion: 6 */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Linking,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './style';


class ResultScreen extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.success) {
      return (

        <View style={styles.container}>
          <Animatable.View
            animation="rotate"
            style={styles.resultIconView}
            delay={3000}
            iterationCount="infinite"
            duration={3000}
          >

            <Icon name="lightbulb-o" size={200} color="#fff" />

          </Animatable.View>
          <View style={styles.congratzView}>
            <Animatable.Text animation="tada" style={styles.congratz}>
        ברכות, נמצאת מתאים להיות יזם!
            </Animatable.Text>
          </View>
          <Animatable.View
            animation="bounceInRight"
            delay={2300}
            duration={1400}
            style={styles.iconListView}
          >

            <AntIcon name="rocket1" size={wp('10%')} color="#FFF" />
            <AntIcon name="arrowleft" size={wp('10%')} color="#FFF" />
            <AntIcon name="tool" size={wp('10%')} color="#FFF" />
            <AntIcon name="arrowleft" size={wp('10%')} color="#FFF" />
            <MaterialIcon name="coffee-outline" size={wp('12%')} color="#FFF" />


          </Animatable.View>
          <View style={styles.actionView}>
            <Animatable.Text
              animation="bounceInRight"
              delay={1000}
              duration={1400}
              style={styles.actionText}
            >
        בוא נשב על כוס קפה ונמריא את העסק שלך!
            </Animatable.Text>

            <Animatable.View animation="bounce" iterationCount={1} delay={4000} style={styles.buttonView}>
              <FeatherIcon.Button borderRadius={wp('60%')} name="send" backgroundColor="white" size={wp('6%')} iconStyle={{ color: '#4caf50' }} onPress={() => Linking.openURL('mailto:26moti@walla.com')}>
                <Text style={{
                  fontSize: wp('4%'), paddingHorizontal: wp('3%'), color: '#4caf50',
                }}
                >
            נשמע מתאים, שלח אימייל!
                </Text>
              </FeatherIcon.Button>
            </Animatable.View>
          </View>
        </View>


      );
    }

    return (

      <View style={styles.failedContainer}>
        <View style={styles.resultIconView}>
          <Animatable.Text animation="rotate" delay={3000} iterationCount="infinite" duration={3000} style={{/* paddingTop: '20%', paddingBottom: '5%' */}}>

            <AntIcon name="closecircleo" size={200} color="#fff" />

          </Animatable.Text>
        </View>
        <View style={styles.failedView}>
          <Animatable.Text animation="tada" style={styles.failedText}>
        על פי החישובים שלנו, אתה לא מתאים להיות יזם. אבל היי - עדיין תוכל להקים עסק מצליח!
          </Animatable.Text>
        </View>

        <Animatable.Text
          animation="bounceInRight"
          delay={1000}
          duration={1400}
          style={{
            color: '#fff', fontSize: wp('4.7%'), fontWeight: '700', position: 'absolute', paddingTop: hp('60%'),
          }}
        >
      בוא נשב על כוס קפה ונשפר את המצב!
        </Animatable.Text>
        <View style={styles.buttonView}>
          <Animatable.View animation="bounce" iterationCount={1} delay={4000} style={{ paddingTop: hp('70%') }}>
            <FeatherIcon.Button name="send" backgroundColor="white" borderRadius={wp('60%')} size={wp('6%')} iconStyle={{ color: '#E53935' }} onPress={() => Linking.openURL('mailto:26moti@gmail.com')}>
              <Text style={{ fontSize: wp('4%'), paddingHorizontal: wp('3%'), color: '#E53935' }}>
          נשמע מתאים, שלח אימייל!
              </Text>
            </FeatherIcon.Button>
          </Animatable.View>
        </View>
      </View>


    );
  }
}

export default ResultScreen;
