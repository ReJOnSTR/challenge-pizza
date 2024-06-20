import React from "react";
import { useHistory } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const history = useHistory();

  const foodItems = [
    {
      id: 1,
      name: "Terminal Pizza",
      image: "/Assets/mile2-aseets/pictures/food-1.png",
      rating: "4.9",
      reviews: "(200)",
      price: "60₺",
    },
    {
      id: 2,
      name: "Position Absolute Acı Pizza",
      image: "/Assets/mile2-aseets/pictures/food-2.png",
      rating: "4.3",
      reviews: "(928)",
      price: "85₺",
    },
    {
      id: 3,
      name: "useEffect Tavuklu Burger",
      image: "/Assets/mile2-aseets/pictures/food-3.png",
      rating: "4.3",
      reviews: "(462)",
      price: "75₺",
    },
  ];

  const handleItemClick = () => {
    history.push(`/order`);
  };

  return (
    <div className="menu-class">
      <header className="menu-header">
        <p
          style={{ fontFamily: "Satisfy", fontSize: "32px", color: "#CE2829" }}
        >
          en çok paketlenen menüler
        </p>
        <p
          style={{ fontFamily: "Barlow", fontSize: "42px", fontWeight: "600" }}
        >
          Acıktıran Kodlara Doyuran Lezzetler
        </p>
      </header>

      <div className="menu">
        {[
          "Ramen",
          "Pizza",
          "Burger",
          "French fries",
          "Fast food",
          "Soft drinks",
        ].map((item, index) => (
          <a href="#" key={index}>
            <button className="menu-item">
              <img src={`/Assets/mile2-aseets/icons/${index + 1}.svg`} alt="" />
              {item}
            </button>
          </a>
        ))}
      </div>

      <div className="food-items">
        {foodItems.map((food) => (
          <div
            className="food-item"
            key={food.id}
            onClick={() => handleItemClick()}
          >
            <span className="food-img">
              <img src={food.image} alt={food.name} className="food-image" />
            </span>
            <p>{food.name}</p>
            <div className="food-details">
              <span>{food.rating}</span>
              <span>{food.reviews}</span>
              <span className="food-price">{food.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
