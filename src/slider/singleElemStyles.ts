import { StyleSheet } from "react-jss";

export const carouselElemWidth = 30; // a must
export const carouselElemHeight = 35; // amust

const singleElemeStyle: StyleSheet<any> = {
  card: {
    height: carouselElemHeight + "em",
    margin: "auto",
    width: carouselElemWidth + "em"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

export default singleElemeStyle;
