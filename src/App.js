import React from "react";
import Section from "./component/container/Section";
import Header from "./component/Content/Header";
import Footer from "./component/container/Footer"

import shop1 from "./component/Images/Shop1.svg";
import shop2 from "./component/Images/Shop2.svg";
import shop3 from "./component/Images/Shop3.svg";
import shop4 from "./component/Images/Shop4.svg";
import shop5 from "./component/Images/Shop5.svg";
import shop6 from "./component/Images/Shop6.svg";
import shop7 from "./component/Images/Shop7.svg";
import shop8 from "./component/Images/Shop8.svg";

const App = () => {
  const products = [
    { image: shop1, title: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: "-35%" },
    { image: shop2, title: "RGB liquid CPU Cooler", price: 1960 },
    { image: shop3, title: "GP11 Shooter USB Gamepad", price: 550 },
    { image: shop4, title: "Quilted Satin Jacket", price: 750 },
    { image: shop5, title: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, discount: "-35%", stars: true },
    { image: shop6, title: "IPS LCD Gaming Monitor", price: 1160, stars: true },
    { image: shop7, title: "HAVIT HV-G92 Gamepad", price: 560, stars: true },
    { image: shop8, title: "AK-900 Wired Keyboard", price: 200, stars: true }
  ];

  return (
    <div>
      <Header />
      <hr className="hr" />
      <Section products={products} />
      <Footer />
    </div>
  );
};

export default App;
