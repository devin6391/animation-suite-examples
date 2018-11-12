import { StyleSheet } from "react-jss";

export const carouselElemWidth = 345; // a must
export const carouselElemHeight = 300; // amust

const singleElemeStyle: StyleSheet<any> = {
  card: {
    height: carouselElemHeight,
    margin: "auto",
    width: carouselElemWidth,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
};

export default singleElemeStyle;
