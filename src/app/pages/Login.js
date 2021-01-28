import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: "",
      username: "",
    };
  }

  onSubmit = (e) => {
    const { password, username } = this.state;

    e.preventDefault();

    fetch("https://academy-video-api.herokuapp.com/auth/login ", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw Error(res.status);
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        // history.replace need to do to go to next page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    return (
      <article className="content">
        <section className="content__wrapper">
          <h1>here will go login form</h1>
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e, "username")}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => this.handleChange(e, "password")}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </section>
      </article>
    );
  }
}

export default Login;
