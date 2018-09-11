import * as React from "react";
import injectSheet from "react-jss";
import KeyboardLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SingleElement from "./SingleElement";
import { carouselComponentStyles } from "./styles";
import { ICarouselData } from "./AppBar";
import { carouselElemHeight, carouselElemWidth } from "./singleElemStyles";
import {
  ISliderChildStyles,
  Slider,
  ISliderDirection
} from "react-animation-suite";

const childStyles: ISliderChildStyles = {
  height: carouselElemHeight,
  marginHorizontal: 2,
  measureUnit: "em",
  transitionTime: 0.3,
  width: carouselElemWidth
};
interface ISliderWithAnimationProps {
  dataArr: ICarouselData[];
  classes: any;
}

interface ISliderWithAnimationStates {
  direction: ISliderDirection;
  selectedIndex: number;
}

class SliderWithAnimation extends React.Component<
  ISliderWithAnimationProps,
  ISliderWithAnimationStates
> {
  public state = {
    direction: ISliderDirection.MoveRight,
    selectedIndex: 0
  };

  public render() {
    const { classes, dataArr } = this.props;
    const { direction, selectedIndex } = this.state;
    const currData = dataArr[selectedIndex];
    const carouselCompProps = {
      classes: null,
      imageUrl: currData.imageUrl,
      text: currData.text,
      title: currData.title
    };
    // tslint:disable-next-line:no-console
    console.log("current data id is: ", currData.id);
    return (
      <div className={classes.root}>
        <div className={classes.leftMove} onClick={this.slideLeftClick}>
          <KeyboardLeftIcon />
        </div>
        <div className={classes.carouselContainer}>
          <Slider
            watchProp={currData.id}
            direction={direction}
            childProps={carouselCompProps}
            childStyles={childStyles}
          >
            <SingleElement {...carouselCompProps} />
          </Slider>
        </div>
        <div className={classes.rightMove} onClick={this.slideRightClick}>
          <KeyboardRightIcon />
        </div>
      </div>
    );
  }

  private slideLeftClick = () => {
    let { selectedIndex } = this.state;
    if (selectedIndex > 0) {
      selectedIndex--;
    } else if (selectedIndex === 0) {
      selectedIndex = this.props.dataArr.length - 1;
    } else {
      throw Error(`Current Index of element can't go below 0`);
    }
    this.setState({
      direction: ISliderDirection.MoveRight,
      selectedIndex
    });
  };

  private slideRightClick = () => {
    let { selectedIndex } = this.state;
    const maxIndex = this.props.dataArr.length - 1;
    if (selectedIndex < maxIndex) {
      selectedIndex++;
    } else if (selectedIndex === maxIndex) {
      selectedIndex = 0;
    } else {
      throw Error(`Current Index of element can't go beyond ${maxIndex}`);
    }
    this.setState({
      direction: ISliderDirection.MoveLeft,
      selectedIndex
    });
  };
}

export default injectSheet(carouselComponentStyles)(SliderWithAnimation);
