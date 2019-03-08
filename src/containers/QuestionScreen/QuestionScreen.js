/* jshint esversion: 6 */

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Slider,
  I18nManager
} from "react-native";
import { Card, Button, CardItem, Body } from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo";
import IonIcon from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import styles from "./style";

I18nManager.allowRTL(true);

const slideText = true;
let carousel;
let bgCard;
const ACTIVE_COLOR = "#4dd0e1";
const INACTIVE_COLOR = "rgba(238,238,238,0.3)";

const questions = [
  {
    title: "בדרך כלל אני מתמודד/ת בהצלחה עם משימות לא פשוטות"
  },
  {
    title: "הנני בעל/ת כושר התמדה, שאפתנות ויחד עם זאת מציאותיות"
  },
  {
    title: "אני מסתגל/ת לשינויים ומתמודד/ת עמם בהצלחה"
  },
  {
    title: "אני בעל/ת יחסי אנוש טובים"
  },
  {
    title: "אני מוכנ/ה לבצע גם משימות משעממות/נחותות כשצריך"
  },
  {
    title: "אני ניחנ/ת בכישורי שיווק ומכירות טובים"
  },
  {
    title: "אני יודע/ת להודות בטעויות ולומד/ת מכשלונות"
  }
];

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      questionString: "בדרך כלל אני מתמודד/ת בהצלחה עם משימות לא פשוטות",
      currentQuestion: 1,
      sum: 0
    };
    this._renderItem = this._renderItem.bind(this);
    console.log(I18nManager.isRTL)
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.currQuestion &&
      this.state.currentQuestion != nextProps.currQuestion
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
            width: wp("60%"),
            height: hp("24%"),
            borderRadius: 10,
            overflow: "hidden",
            backgroundColor:
              (I18nManager.isRTL &&
                (this.state.currentQuestion == 7 - index ||
                  this.state.currentQuestion == index + 1)) ||
              (!I18nManager.isRTL && this.state.currentQuestion == index + 1)
                ? "#00BCD4"
                : "transparent"
          }}
        >
          <CardItem>
            <Body>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "300",
                  start: 0,
                  // textAlign: 'start',
                  color: "#424242",
                  height: hp("11%"),
                  backgroundColor: "transparent"
                }}
              >
                {item.title}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            {I18nManager.isRTL && (
              <Text
                style={{
                  color:
                    (I18nManager.isRTL &&
                      this.state.currentQuestion == 7 - index) ||
                    (!I18nManager.isRTL &&
                      this.state.currentQuestion == index + 1) ||
                    (!I18nManager.isRTL &&
                      this.state.currentQuestion == index + 1)
                      ? "#00BCD4"
                      : "transparent"
                }}
              >
                {7 - index} / 7
              </Text>
            )}
            {!I18nManager.isRTL && (
              <Text
                style={{
                  color:
                    (I18nManager.isRTL &&
                      this.state.currentQuestion == 7 - index) ||
                    (!I18nManager.isRTL &&
                      this.state.currentQuestion == index + 1) ||
                    (!I18nManager.isRTL &&
                      this.state.currentQuestion == index + 1)
                      ? "#00BCD4"
                      : "transparent"
                }}
              >
                {index + 1} / 7
              </Text>
            )}
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
          flex: 1
        }}
        colors={["#a500ea", "#7500e0"]}
        start={{ x: 0, y: 0.1 }}
        end={{ x: 0.1, y: 1 }}
      >
        <View style={[styles.container, { paddingTop: hp("2%"), flex: 2 }]}>
          <Text style={styles.instructionText}> החלק/י על הסליידר </Text>

          <Text style={styles.secondaryText}> עד כמה את/ה מסכימ/ה? </Text>
        </View>
        <View style={[styles.container, { paddingTop: hp("7%") }]}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={questions}
            renderItem={this._renderItem}
            sliderWidth={wp("100%")}
            itemWidth={wp("60%")}
            itemHeight={hp("21%")}
            sliderHeight={hp("100%")}
            layoutCardOffset={hp("0.73%")}
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
              style={{ width: 230, zIndex: 100 }}
              onValueChange={value => this.handleValueChange(value)}
              minimumValue={1}
              maximumValue={5}
              step={1}
              onSlidingComplete={() => {
                this.setState(
                  { currentQuestion: this.state.currentQuestion + 1 },
                  () => {
                    // console.log(this.state.currentQuestion)
                    this.props.changeVal(this.state.currentQuestion);
                  }
                );

                this.props.adjustSum(this.state.value);
                this._carousel.snapToNext(
                  (animated = true),
                  (fireCallback = true)
                );

                this.handleValueChange(3);

                this._resetSlider();
              }}
              minimumTrackTintColor={ACTIVE_COLOR}
              thumbTintColor="#4dd0e1"
              maximumTrackTintColor="#9E9E9E"
            />
            <View style={styles.sliderStepsView}>
              <EntypoIcon
                name="dot-single"
                style={{
                  color: ACTIVE_COLOR,
                  zIndex: -1,
                  height: 52
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 2 ? ACTIVE_COLOR : INACTIVE_COLOR,
                  zIndex: -1,
                  height: 52
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 3 ? ACTIVE_COLOR : INACTIVE_COLOR,
                  zIndex: -1,
                  height: 52
                }}
                size={50}
              />

              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 4 ? ACTIVE_COLOR : INACTIVE_COLOR,
                  zIndex: -1,
                  height: 52
                }}
                size={50}
              />
              <EntypoIcon
                name="dot-single"
                style={{
                  color: this.state.value >= 5 ? ACTIVE_COLOR : INACTIVE_COLOR,
                  zIndex: -1,
                  height: 52
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
                    (fireCallback = true)
                  );
                  this.props.resetSum();

                  this.handleValueChange(3);

                  this._resetSlider();
                }
              }}
              style={styles.resetButton}
            >
              {I18nManager.isRTL && (
                <Text style={[styles.buttonText, { marginStart: 12 }]}>
                  התחל מחדש
                </Text>
              )}

              <IonIcon name="ios-return-right" size={28} style={styles.icon} />
              {!I18nManager.isRTL && (
                <Text style={[styles.buttonText, { marginEnd: 40 }]}>
                  התחל מחדש
                </Text>
              )}
            </Button>
          </View>

          <View style={{ flex: 4 }} />
        </View>
      </LinearGradient>
    );
  }
}
export default QuestionScreen;
