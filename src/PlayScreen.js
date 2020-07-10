import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const rock = require("./signs/rock.png");
const scissors = require("./signs/scissors.png");
const paper = require("./signs/paper.png");

const bgColors = ["#16a085", "#9b59b6", "#3498db"];

const randomImg = () => {
  const emojis = [rock, paper, scissors];
  const random = Math.floor(Math.random() * 3);
  return emojis[random];
};
randomImg();
const PlayScreen = () => {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    if (counter === 0) return;

    const timer = setTimeout(() => {
      setCounter((prv) => prv - 1);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [counter]);
  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColors[counter - 1] },
        styles.container
      )}
    >
      {counter === 0 ? (
        <>
          <Image style={styles.sign} source={randomImg()} />
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="Play Again" />
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  counter: {
    fontSize: 120,
    color: "white",
  },
  sign: {
    width: 200,
    height: 200,
  },
  button: {
    position: "absolute",
    bottom: 40,
  },
});

export default PlayScreen;
