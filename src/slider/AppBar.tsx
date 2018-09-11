import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import injectSheet from "react-jss";
import SliderWithAnimation from "./SliderWithAnimation";
import SliderWithoutAnimation from "./SliderWithoutAnimation";
import Tab from "@material-ui/core/Tab";
import TabContainer from "../common/TabContainer";
import Tabs from "@material-ui/core/Tabs";
import { appBarStyles } from "./styles";

export interface ICarouselData {
  id: number | string | boolean;
  imageUrl: string;
  text: string;
  title: string;
}

const carouselDataArr: ICarouselData[] = [
  {
    id: 0,
    imageUrl:
      "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350",
    text: "Relax in the beauty",
    title: "The Seat"
  },
  {
    id: "23",
    imageUrl:
      "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&h=350",
    text: "Feel the freedom",
    title: "The Farm"
  },
  {
    id: false,
    imageUrl:
      "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    text: "Railway track through peaceful trees",
    title: "The Track"
  }
];

type TabValuesType = "withAnimation" | "withoutAnimation";

interface ICarouselTabsProps {
  classes: any;
}

interface ICarouselTabsStates {
  value: TabValuesType;
}

class CarouselTabs extends React.Component<
  ICarouselTabsProps,
  ICarouselTabsStates
> {
  constructor(props: ICarouselTabsProps) {
    super(props);
    this.state = {
      value: "withoutAnimation"
    };
  }

  public render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth={true}
          >
            <Tab label="Carousel Without animation" value="withoutAnimation" />
            <Tab label="Carousel With Animation" value="withAnimation" />
          </Tabs>
        </AppBar>
        <TabContainer>{this.renderTabContainerChild()}</TabContainer>
      </div>
    );
  }

  private handleChange = (event: React.KeyboardEvent, value: TabValuesType) => {
    this.setState({ value });
  };

  private renderSliderWithoutAnimation = (): JSX.Element => {
    return <SliderWithoutAnimation dataArr={carouselDataArr} classes={null} />;
  };

  private renderSliderWithAnimation = (): JSX.Element => {
    return <SliderWithAnimation dataArr={carouselDataArr} classes={null} />;
  };

  private renderTabContainerChild = (): JSX.Element | null => {
    if (this.state.value === "withoutAnimation") {
      return this.renderSliderWithoutAnimation();
    } else if (this.state.value === "withAnimation") {
      return this.renderSliderWithAnimation();
    } else {
      return null;
    }
  };
}

export default injectSheet(appBarStyles)(CarouselTabs);
