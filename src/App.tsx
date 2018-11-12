import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar } from "./slider/index";

class App extends React.Component<any> {
  public render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/slider">Slider</Link>
            </li>
          </ul>
          <hr />
          <Route path="/slider" component={AppBar} />
        </div>
      </Router>
    );
  }
}

export default App;
