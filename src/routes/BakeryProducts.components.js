import { Route } from "react-router-dom";
import BakeryProduct from "../pages/BakeryProduct/BakeryProduct";

const bakeryProduct = ["baked", "cake", "cookies", "brownie", "cupcakes"];
const route = bakeryProduct.map((e) => {
  return (
    <Route
      path={"/" + e}
      component={() => {
        return <BakeryProduct product={e} />;
      }}
    />
  );
});

export default route;
