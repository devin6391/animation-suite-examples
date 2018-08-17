import * as React from "react";
import Typography from "@material-ui/core/Typography";

interface IAppBarTabContainerProps {
  children: JSX.Element | null;
}

function TabContainer(props: IAppBarTabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default TabContainer;
