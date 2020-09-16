import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ image: { title, image, score } }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title} - {score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetail;
