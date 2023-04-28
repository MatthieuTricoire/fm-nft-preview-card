import "./Card.css";

import eth_img from "../assets/images/image-equilibrium.jpg";
import eth_icon from "../assets/images/icon-ethereum.svg";
import deadline_icon from "../assets/images/icon-clock.svg";
import profile_img from "../assets/images/image-avatar.png";

function Card() {
  return (
    <div className="card container">
      <img src={eth_img} className="card__img" alt="" />
      <h2 className="card__title">Equilibrium #3429</h2>
      <p className="card__description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="card__details">
        <div className="card__rate">
          <img src={eth_icon} alt="" className="" />
          <span>0.041ETH</span>
        </div>
        <div className="card__deadline">
          <img src={deadline_icon} alt="" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="hline"></div>
      <div className="card__author">
        <img src={profile_img} alt="" />
        <span>
          Creation of <span>&nbsp;Jules Wyvern</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
