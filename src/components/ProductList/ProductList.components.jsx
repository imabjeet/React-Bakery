import React from "react";
import "./ProductList.styles.css";

const products = {
  baked: [
    {
      name: "baked",
      url:
        "https://images.unsplash.com/photo-1512223792601-592a9809eed4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=304&q=80"
    },
    {
      name: "baked",
      url:
        "https://images.unsplash.com/photo-1501437638401-4addcfd56d3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "baked",
      url:
        "https://images.unsplash.com/photo-1548865164-1f50430ddd6f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "baked",
      url:
        "https://images.unsplash.com/photo-1605090932376-673cd62acce7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njd8fGJha2VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ],
  cakes: [
    {
      name: "cake",
      url:
        "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/6522.jpg?quality=90&resize=600%2C400"
    },
    {
      name: "cake",
      url:
        "https://www.recipegirl.com/wp-content/uploads/2015/01/Kit-Kat-Cake-1-500x500.jpg"
    },
    {
      name: "cake",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXgpsqHDfli1TZaHt6U_B9MY2QApMr9SXMQ&usqp=CAU"
    },
    {
      name: "cake",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000244_cherry-cake_550.jpeg"
    }
  ],
  cookies: [
    {
      name: "cookies",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000267_choco-coffee-cookies_415.jpeg"
    },
    {
      name: "cookies",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000270_choco-milk-cookies_415.jpeg"
    },
    {
      name: "cookies",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000268_choco-honey-cookies_415.jpeg"
    },
    {
      name: "cookies",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000266_chocochips-cookies_415.jpeg"
    }
  ],
  brownie: [
    {
      name: "brownie",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000178_brownie-with-chocolate-syrup_550.jpeg"
    },
    {
      name: "brownie",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000181_chocolate-brownies_550.jpeg"
    },
    {
      name: "brownie",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000179_brownie-with-ice-cream_415.jpeg"
    },
    {
      name: "brownie",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000181_chocolate-brownies_415.jpeg"
    }
  ],
  cupcakes: [
    {
      name: "cupcakes",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000276_choco-orange-jumbo-cupcake_415.jpeg"
    },
    {
      name: "cupcakes",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000277_choco-vanila-jumbo-cupcake_415.jpeg"
    },
    {
      name: "cupcakes",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000284_dark-chocolate-mini-cupcake_415.jpeg"
    },
    {
      name: "cupcakes",
      url:
        "http://bakedelightstheme.demo.themes.nopaccelerate.com/images/thumbs/0000286_lemon-cream-mini-cupcake_415.jpeg"
    }
  ]
};

const mapItems = (itemtype) => {
  return products[itemtype].map((item) => {
    return (
      <div className="item">
        <img className="image" src={item.url} alt=""></img>
        <p className="item_name">{item.name}</p>
      </div>
    );
  });
};

function ProductList(props) {
  return <div className="items">{mapItems(props.product)}</div>;
}

export default ProductList;
