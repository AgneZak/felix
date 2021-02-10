import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.scss";
import store from "./store";

import { Layout, PrivateRoute, PublicRoute } from "./components";
import { Home, Login, Content, SingleContentEntry } from "./pages";

function App() {

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
              <SingleContentEntry />
            </PrivateRoute>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
