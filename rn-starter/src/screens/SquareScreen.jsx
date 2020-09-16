import React, { useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// NOTE: reducer
const reducer = (state, action) => {
  //  state === { red: number, green: number, blue: number}
  // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
  const { type, payload } = action;

  switch (type) {
    case "red":
      // if (state.red + amount > 255 || state.red + amount < 0) {
      //   return state;
      // }
      // return { ...state, red: state.red + action.amount };
      return state.red + payload > 255 || state.red + payload < 0
        ? state
        : { ...state, red: state.red + payload };
    case "green":
      return state.green + payload > 255 || state.green + payload < 0
        ? state
        : { ...state, green: state.green + payload };
    case "blue":
      return state.blue + payload > 255 || state.blue + payload < 0
        ? state
        : { ...state, blue: state.blue + payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   // color === 'red','green','blue'
  //   // change === +15, -15
  //   // if (color === "red") {
  //   //   if (red + change > 255 || red + change < 0) {
  //   //     return;
  //   //   } else {
  //   //     setRed(red + change);
  //   //   }
  //   // }
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       return;
  //     // if (red + change > 255 || red + change < 0) {
  //     //   return;
  //     // } else {
  //     //   setRed(red + change);
  //     // }
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //       return;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  // NOTE: reducer
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        textColor="Red"
        // onIncrease={() => setColor("red", COLOR_INCREMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        textColor="Green"
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        textColor="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
