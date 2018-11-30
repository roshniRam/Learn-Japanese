import React from "react";
import Menu from "./Menu";

class Navbar extends React.Component {
  state = {
    isAuth: true // Change State here to toggle between login & logout
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <a href="#">
            <img
              src="http://nulldefinition.com/wp-content/uploads/2016/09/null_logo-300x300.png"
              height="50px"
              width="50px"
            />
            App logo
          </a>
        </div>

        <div className="navbar__links">
          <div className="navbar__link">
            <a href="#">Sign up</a>
          </div>

          <div className="navbar__link">
            <a href="#">{this.state.isAuth ? "login" : "logout"}</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
