import { useState } from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";
import store from "./store";

import { Layout, PrivateRoute, PublicRoute } from "./components";
import { Home, Login, Content, SingleContentEntry } from "./pages";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites(favorites.concat(id));
    }
  };

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/movies">
              <Content />
            </PrivateRoute>
            <PrivateRoute exact path="/movies/:itemId">
              <SingleContentEntry
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
