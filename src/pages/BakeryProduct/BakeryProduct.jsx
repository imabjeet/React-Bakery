import React from "react";
import ImageList from "../../components/ImageList/ImageList.components";
import "./BakeryProduct.styles.css";

const products = {
  baked: [
    "https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=304&q=80",
    "https://images.unsplash.com/photo-1501437638401-4addcfd56d3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1548865164-1f50430ddd6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1605090932376-673cd62acce7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1574281288648-94bb276f508d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ],
  cake: [
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000240_berries-cake_550.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000243_blackberry-vanila-cake_550.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000230_butterscotch-layered-cake_550.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000244_cherry-cake_550.jpeg"
  ],
  cookies: [
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000267_choco-coffee-cookies_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000270_choco-milk-cookies_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000268_choco-honey-cookies_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000266_chocochips-cookies_415.jpeg"
  ],
  brownie: [
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000178_brownie-with-chocolate-syrup_550.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000181_chocolate-brownies_550.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000179_brownie-with-ice-cream_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000181_chocolate-brownies_415.jpeg"
  ],
  cupcakes: [
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000276_choco-orange-jumbo-cupcake_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000277_choco-vanila-jumbo-cupcake_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000284_dark-chocolate-mini-cupcake_415.jpeg",
    "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000286_lemon-cream-mini-cupcake_415.jpeg"
  ]
};

function BakeryProduct(props) {
  return (
    <div style={{ backgroundColor: "gainsboro" }}>
      <div className="product">{props.product}</div>
      <div className="imagelist">
        <ImageList items={products[props.product]} />
      </div>
    </div>
  );
}

export default BakeryProduct;
