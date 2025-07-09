import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Siva",
      userInfo: {
        login: "Dummy User",
        bio: "This is a dummy user bio  for demonstration purposes.",
        id: " 12314",
        public_repos: 0,
        avatar_url: `https://avatars.githubusercontent.com/u/123456789?v=4`,
      },
    };
  }
  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/sivanm85");
    const json = await userData.json();
    this.setState({ userInfo: json });
    console.log("ComponentDidMount called", json);
  }
  async componentDidUpdate() {
    console.log("ComponentDidUpdate called");
    // You can add logic here to fetch new data or perform actions when the component updates
  }
  render() {
    const { count } = this.state;
    const { login, id, public_repos, avatar_url } = this.state.userInfo;
    const { name } = this.props;
    return (
      <div className="user-class">
        <h1>User Class Component</h1>
        <p> Name:{name}</p>
        <p> Count: {count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrement Count
        </button>
        <h2>GitHub User Info</h2>
        <p>Login: {login}</p>
        <p>ID: {id}</p>
        <p>Public Repos: {public_repos}</p>
        <img
          src={avatar_url}
          alt="User Avatar"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    );
  }
}
export default UserClass;
