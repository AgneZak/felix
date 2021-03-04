import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import { CreateUser, PickPlan } from "./subpages";

function SignUp() {
  let { path, url } = useRouteMatch();

  return (
    <div className="content">
      <ul>
        <li>
          <NavLink
            to={`${url}/create-user`}
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Create User
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to={`${url}/plan`}
          >
            Pick a Plan
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName="selected"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to={`${url}/payment`}
          >
            Payment
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/create-user`}>
          <h1>Here goes user info</h1>
          <CreateUser />
        </Route>
        <Route path={`${path}/plan`}>
          <h1>Here goes plan</h1>
          <PickPlan/>
        </Route>
        <Route path={`${path}/payment`}>
          <h1>Here goes payment</h1>
          <form></form>
        </Route>
        <Redirect to={`${path}/create-user`} />
      </Switch>
    </div>
  );
}

export default SignUp;
