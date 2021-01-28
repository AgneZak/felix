import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  toggleFavorite = (id) => {
    const { favorites } = this.state;
    if (favorites.includes(id)) {
      this.setState({
        favorites: favorites.filter((favorite) => favorite !== id),
      });
    } else {
      this.setState({ favorites: favorites.concat(id) });
    }
  };

  render() {
    const { favorites } = this.state;
    return (
      <Router>
        <Layout>
          <Switch>
          <Route exact path="/">
            <Home favorites={favorites} toggleFavorite={this.toggleFavorite} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
