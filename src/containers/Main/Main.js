/* jshint esversion: 6 */

import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native';
import IntroScreen from '../IntroScreen/IntroScreen';
import QuestionScreen from '../QuestionScreen/QuestionScreen';
import ResultScreen from '../ResultScreen/ResultScreen';

// const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

export default class Main extends Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.onSkipOrFinish = this.onSkipOrFinish.bind(this);
    this.resetSum = this.resetSum.bind(this);
    this.addSum = this.addSum.bind(this);
    this.state = {

      countQuestion: 1,
      answerSum: 0,
      firstLaunch: null,

    };
  }

  onSkipOrFinish() {
    this.setState({ firstLaunch: 'false' });
    AsyncStorage.setItem('alreadyLaunched', 'true');
  }

  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        this.setState({ firstLaunch: 'true' });
      } else {
        this.setState({ firstLaunch: 'false' });
      }
    });
  }

  changeValue(value) {
    this.setState({ countQuestion: value }, () => {
      console.log('countQuestion', this.state.countQuestion);
    });
  }

  addSum(val) {
    this.setState({ answerSum: this.state.answerSum + val }, () => {
      console.log('answerSum', this.state.answerSum);
    });
  }

  resetSum() {
    this.setState({ answerSum: 0 });
  }

  render() {
    if (this.state.firstLaunch == 'false') {
      if (this.state.countQuestion <= 7) return <QuestionScreen currQuestion={this.state.countQuestion} resetSum={this.resetSum} adjustSum={this.addSum} changeVal={this.changeValue} sum={this.state.answerSum} />;

      if (this.state.answerSum > 26) return <ResultScreen success="true" />;

      return <ResultScreen success={false} />;
    }
    return <IntroScreen onSkipOrFinish={this.onSkipOrFinish} />;
  }
}
