import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Header from "./Header";

class App extends Component {
  routes = [
    { path: "/one", component: One },
    { path: "/two", component: Two },
    { path: "/three", component: Three },
  ];

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            {this.routes.map((route, index) => (
              <Route key={index} path={route.path} component={Header} />
            ))}
          </Switch>

          <Switch>
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
