import React from "react";
import { Entypo } from "@expo/vector-icons";

const BackButton = props => {
  return <Entypo name={props.name} size={25} onPress={props.onBack} />;
};
export default BackButton;
