import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from "./slider/index";

class App extends React.Component<any> {
  public render() {
    return (
      <Router>
        <div>
          <Route path="/slider" component={AppBar} />
        </div>
      </Router>
    );
  }
}

export default App;
