import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

// images
import beach from "../assets/beach.jpg";
import forest from "../assets/forest.jpg";
import mountain from "../assets/mountain.jpg";

const ImageScreen = () => {
  const images = [
    {
      title: "Forest",
      image: forest,
      score: 9,
    },
    {
      title: "Beach",
      image: beach,
      score: 7,
    },
    {
      title: "Mountain",
      image: mountain,
      score: 4,
    },
  ];
  return (
    <View>
      <Text>Image Screen</Text>
      {images.map((image) => (
        <ImageDetail image={image} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
