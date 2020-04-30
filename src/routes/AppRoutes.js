import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import DashboardPage from "../components/DashbordPage";
import NotFound from "../components/NotFound";
import RegisterPage from "../components/RegisterPage";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";
import FooterPage from "../components/FooterPage";
import RegisteredMembers from "../components/RegisteredMembers";
import AdminLogin from "../components/AdminLogin";

class AppRoutes extends React.Component {
  state = {
    logedIn: true,
  };

  // componentDidUpdate() {
  //   if (
  //     localStorage.getItem("login") != null &&
  //     localStorage.getItem("login") == "true"
  //   ) {
  //     this.setState(() => ({
  //       logedIn: true,
  //     }));
  //   } else {
  //     this.setState(() => ({
  //       logedIn: undefined,
  //     }));
  //   }
  //   console.log(localStorage.getItem("login"));
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="bg-light">
          <Header state={this.state.logedIn} />
          <Switch style='background: url("../../image/home.png")'>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/members" component={RegisteredMembers} />
            <Route path="/admin" component={AdminLogin} />
            <Route component={NotFound} />
          </Switch>
          <FooterPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
