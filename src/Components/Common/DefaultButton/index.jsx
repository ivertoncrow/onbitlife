import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  heidht,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { width: width, height: heidht }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 28,
    padding: 12,
  },
});
