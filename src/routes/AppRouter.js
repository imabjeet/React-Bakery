import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header.component";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import route from "./BakeryProducts.components";

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contact" component={ContactPage} />
        {route}
      </Switch>
    </Router>
  );
}

export default AppRouter;
