import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import injectSheet from "react-jss";
import singleElemStyles from "./singleElemStyles";
import Typography from "@material-ui/core/Typography";

interface ISingleElementProps {
  classes: any;
  imageUrl: string;
  text: string;
  title: string;
}

const SingleElement = ({
  classes,
  imageUrl,
  text,
  title,
}: ISingleElementProps) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={imageUrl} title={title} />
    <CardContent>
      <Typography gutterBottom={true} variant="headline" component="h2">
        {title}
      </Typography>
      <Typography component="p">{text}</Typography>
    </CardContent>
  </Card>
);

export default injectSheet(singleElemStyles)(SingleElement);
