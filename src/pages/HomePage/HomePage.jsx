import React from "react";
import HomePageItem from "../../components/HomePageItem/HomePageItem.components";
import "./HomePage.styles.css";

const images = [
  {
    url:
      "https://img1.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
    title: "BAKED"
  },
  {
    url:
      "https://wrightsdairyfarm.com/assets/img/dessertcakes/dessertcakebanner2.jpg",
    title: "CAKE"
  },
  {
    url: "https://wrightsdairyfarm.com/assets/img/bakery/bakery-banner.jpg",
    title: "COOKIES"
  },
  {
    url: "https://wrightsdairyfarm.com/assets/img/bakery/blueberry.jpg",
    title: "BROWNIE"
  },
  {
    url: "https://wrightsdairyfarm.com/assets/img/cupcakes/cupcakebanner.jpg",
    title: "CUP CAKES"
  }
];

const map = images.map((element) => (
  <HomePageItem content={element}></HomePageItem>
));

function HomePage() {
  return <div className="menu-directory">{map}</div>;
}

export default HomePage;
