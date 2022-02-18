import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { COLORS, FONTS } from "../constants";

const Button = ({ btnText, btnContainerStyle, colors, onPress }) => {
  if (colors.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{
            ...btnContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            {btnText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={{ ...btnContainerStyle }} onPress={onPress}>
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            ...FONTS.h2,
          }}
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default Button;
