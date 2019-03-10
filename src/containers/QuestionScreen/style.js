import { StyleSheet, I18nManager } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    // paddingHorizontal: '10%',
    alignItems: "stretch",
    justifyContent: "center"
  },

  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: "transparent"

    // marginBottom: hp('6%'),
  },
  sliderView: {
    flex: 1,
    paddingHorizontal: "20%",
    alignItems: "stretch",
    justifyContent: "center"
  },

  sliderTextMin: {
    color: "rgba(238,238,238,0.7)",
    fontSize: hp("2%"),
    textAlign: "center",
    fontWeight: "300",
    marginStart: wp("3%")
  },
  sliderTextMax: {
    color: "rgba(238,238,238,0.7)",
    fontSize: hp("2%"),
    textAlign: "center",
    fontWeight: "300",
    marginStart: wp("5%")
  },
  instructionText: {
    fontSize: hp("2.4%"),
    textAlign: "center",
    marginTop: hp("3%"),
    color: "#fff"
  },
  sliderTextContainer: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: wp("12%"),
    marginTop: -hp("1%"),
    zIndex: -1
  },
  sliderStepsView: {
    flex: 1,
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute"
  },

  secondaryText: {
    fontSize: hp("3.4%"),
    textAlign: "center",
    color: "#fff"
  },
  bottomContainer: {
    flex: 3,
    justifyContent: "center",
    textAlign: "center",
    zIndex: 2
  },
  barContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    marginTop: hp("4%")
  },
  prevButtonContainer: {
    flex: 1,
    marginTop: hp("7%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 12,
    zIndex: 15,
    color: "#3700B3"
  },
  icon: {
    color: "#3700B3",
    marginEnd: 20
  },
  resetButton: {
    borderRadius: wp("30%"),
    zIndex: 14,
    width: 140,
    height: 50,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginTop: -hp("2%")
  }
});

export default styles;
