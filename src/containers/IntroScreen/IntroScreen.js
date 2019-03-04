
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './style';


const slides = [

  {
    key: 'answer',
    title: 'תשובה מותאמת אישית',
    text: 'לאחר סיום שבעת השאלות, תוכל לדעת אחת ולתמיד- האם להיות יזם זה בשבילך?',
    icon: 'comment-o',
    colors: ['#BA68C8', '#9C27B0'],
  },
  {
    key: 'slide',
    title: 'ממשק אינטואיטיבי',
    text: 'החלק על הסליידר כדי לבחור עד כמה אתה מסכים עם המשפט שמוצג על המסך. עזוב את הסליידר - ותעבור מיד לשאלה הבאה',
    icon: 'hand-pointer-o',
    colors: ['#26c6da', '#0097a7'],
  },

  {
    key: 'easy',
    title: 'פשוט וקל',
    text: 'גלה האם אתה מתאים להיות יזם - בשבע שאלות פשוטות',
    icon: 'hourglass-start',
    colors: ['#29b6f6', '#1e88e5'],
  },
];

class IntroScreen extends React.Component {


  renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >

      {props.icon == 'hand-pointer-o' && <Animatable.View animation='slideInRight' iterationCount='infinite' direction='alternate' delay= {500} duration = {1300} direction='alternate'>
      <Icon style={{ backgroundColor: 'transparent' , paddingTop:hp('20%'), paddingRight:wp('10%')}} name={props.icon} size={200} color="white" />
      </Animatable.View>}
      {props.icon == 'hourglass-start' && <Animatable.View animation='tada' iterationCount='infinite' direction='alternate' delay= {500} duration = {3000} direction='alternate'>
      <Icon style={{ backgroundColor: 'transparent' , paddingTop:hp('20%')}} name={props.icon} size={200} color="white" />
      </Animatable.View>}
      {props.icon == 'comment-o' && <Animatable.View animation='pulse' iterationCount='infinite' direction='normal' delay= {500} duration = {3000} direction='alternate'>
      <Icon style={{ backgroundColor: 'transparent' , paddingTop:hp('20%')}} name={props.icon} size={200} color="white" />
      </Animatable.View>}

        <View style={{flex: 1}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>

    </LinearGradient>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this.renderItem}
        onDone={this.props.onSkipOrFinish}
        onSkip={this.props.onSkipOrFinish}
      />
    );
  }
}


export default IntroScreen;
