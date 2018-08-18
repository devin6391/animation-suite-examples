import { StyleSheet } from "react-jss";

export const appBarStyles: StyleSheet<any> = {
  root: {
    backgroundColor: "#bebebe",
    width: "100vw"
  }
};

const carouselArrowStyle = {
  backgroundColor: "#949494",
  cursor: "pointer",
  display: "flex",
  flex: 1,
  // tslint:disable-next-line:object-literal-sort-keys
  "&:hover": {
    backgroundColor: "#7d7d7e"
  },
  "& > svg": {
    margin: "auto"
  }
};

export const carouselComponentStyles: StyleSheet<any> = {
  carouselContainer: {
    display: "flex",
    flex: 6,
    overflow: "hidden"
  },
  leftMove: {
    ...carouselArrowStyle
  },
  rightMove: {
    ...carouselArrowStyle
  },
  root: {
    display: "flex",
    width: 500
  }
};
