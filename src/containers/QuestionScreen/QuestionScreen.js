/* jshint esversion: 6 */

import React, { Component } from 'react';
import {

  View,
  Text,
  Dimensions,
  I18nManager,

} from 'react-native';
import {
  Card, Button, CardItem, Body,
} from 'native-base';
import Slider from 'react-native-slider';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
import { LinearGradient } from 'expo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './style';

I18nManager.allowRTL(false);
const slideText = true;
let carousel;
let bgCard;

const questions = [
  {
    title: 'בדרך כלל אני מתמודד/ת בהצלחה עם משימות לא פשוטות',
  },
  {
    title: 'הנני בעל/ת כושר התמדה, שאפתנות ויחד עם זאת מציאותיות',
  },
  {
    title: 'אני מסתגל/ת לשינויים ומתמודד/ת עמם בהצלחה',
  },
  {
    title: 'אני בעל/ת יחסי אנוש טובים',
  },
  {
    title: 'אני מוכנ/ה לבצע גם משימות משעממות/נחותות כשצריך',
  },
  {
    title: 'אני ניחנ/ת בכישורי שיווק ומכירות טובים',
  },
  {
    title: 'אני יודע/ת להודות בטעויות ולומד/ת מכשלונות',
  },
];

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      questionString: 'בדרך כלל אני מתמודד/ת בהצלחה עם משימות לא פשוטות',
      currentQuestion: 1,
      sum: 0,
    };
    this._renderItem = this._renderItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currQuestion
      && this.state.currentQuestion != nextProps.currQuestion
    ) {
      this.setState({ currentQuestion: nextProps.currQuestion });
    }
    if (nextProps.sum && this.state.sum != nextProps.sum) {
      this.setState({ sum: nextProps.sum });
    }
  }

  handleValueChange(val) {
    this.setState({ value: val }, () => {
      // async stuff
    });
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.card}>
        <Card
          style={{
            width: wp('60%'),
            height: hp('24%'),
            borderRadius: 10,
            overflow: 'hidden',
            backgroundColor: this.state.currentQuestion == index + 1 ? '#009688' : 'transparent',
          }}
        >
          <CardItem>
            <Body>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '300',
                  right: 0,
                  textAlign: 'right',
                  color: '#424242',
                  height: hp('11%'),
                  backgroundColor: 'transparent',


                }}
              >
                {item.title}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text style={{ color: '#00796B' }}>
              {index + 1}

  / 7
            </Text>
          </CardItem>
        </Card>
      </View>
    );
  }

  _resetSlider() {
    this.setState({ value: 3 });
  }

  render() {
    return (
      <LinearGradient
        style={{
          zIndex: 1,
          flex: 1,
        }}
        colors={['#a500ea', '#7500e0']}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <View style={[styles.container, { paddingTop: hp('2%'), flex: 2 }]}>
          <Text style={styles.instructionText}> החלק/י על הסליידר </Text>

          <Text style={styles.secondaryText}> עד כמה את/ה מסכימ/ה? </Text>
        </View>
        <View style={[styles.container, { paddingBottom: hp('10%') }]}>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={questions}
            renderItem={this._renderItem}
            sliderWidth={wp('100%')}
            itemWidth={wp('60%')}
            itemHeight={hp('21%')}
            sliderHeight={hp('100%')}
            layoutCardOffset={hp('0.73%')}
            layout="default"
            inactiveSlideOpacity={0.4}
            firstItem={0}
            scrollEnabled={false}
            slideStyle={{ flex: 1 }}
          />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.barContainer}>

            <Slider
              value={this.state.value}
              style={{ width: 230, zIndex: 90 }}
              onValueChange={value => this.handleValueChange(value)}
              minimumValue={1}
              maximumValue={5}
              step={1}
              disabled={false}
              onSlidingComplete={() => {
                this.setState(
                  { currentQuestion: this.state.currentQuestion + 1 },
                  () => {
                    // console.log(this.state.currentQuestion)
                    this.props.changeVal(this.state.currentQuestion);
                  },
                );

                this.props.adjustSum(this.state.value);
                this._carousel.snapToNext(
                  (animated = true),
                  (fireCallback = true),
                );

                this.handleValueChange(3);

                this._resetSlider();
              }}
              minimumTrackTintColor="#fff"
              thumbTintColor="#fff"
              maximumTrackTintColor="#757575"
            />
            <View style={styles.sliderStepsView}>
              <EntypoIcon
                name="dot-single"
                style={{ color: '#EEEEEE', height: 50 }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 2 ? '#EEEEEE' : '#757575',
                  height: 50,
                  zIndex: -1,
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 3 ? '#EEEEEE' : '#757575',
                  height: 50,
                  zIndex: -1,
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 4 ? '#EEEEEE' : '#757575',
                  height: 50,
                  zIndex: -1,
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 5 ? '#EEEEEE' : '#757575',
                  height: 50,
                  zIndex: -1,
                }}
                size={50}
              />
            </View>
          </View>
          <View style={styles.sliderTextContainer}>
            <Text style={styles.sliderTextMin}>לא נכון</Text>
            <Text style={styles.sliderTextMax}>נכון מאוד</Text>
          </View>
          <View style={styles.prevButtonContainer}>
            <Button
              underlayColor="#EEEEEE"
              onPress={() => {
                // ResetQuestions
                if (this.state.currentQuestion > 1) {
                  this.setState({ currentQuestion: 1 }, () => {
                    // console.log(this.state.currentQuestion)
                    this.props.changeVal(this.state.currentQuestion);
                  });

                  this._carousel.snapToItem(
                    0,
                    (animated = true),
                    (fireCallback = true),
                  );
                  this.props.resetSum();

                  this.handleValueChange(3);

                  this._resetSlider();
                }
              }}
              style={styles.resetButton}
            >
              <IonIcon
                name="ios-return-right"
                size={28}
                style={styles.icon}
                color="#26A69A"
              />
              <Text style={styles.buttonText}>
                התחל מחדש
              </Text>
            </Button>

          </View>

          <View style={{ flex: 4 }} />
        </View>
      </LinearGradient>
    );
  }
}
export default QuestionScreen;
