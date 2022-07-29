import React from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import Button from "../../components/Button";
import Container from "../../components/Container";
import RightPurpleArrowIcon from "../../../public/assets/arrow-icon.svg";
import LeftArrowIcon from "../../../public/assets/Arrow - Left.svg";
import HeartIcon from "../../../public/assets/Heart.svg";

const { container } = styles;

// How to make radio buttons look like buttons

function Item() {
  return (
    <Container>
      <div className={container}>
        <section className="imageSection">
          <Link to="/home">
            <LeftArrowIcon />
          </Link>

          <Link to="/favorites">
            <HeartIcon />
          </Link>

          <img src="../../assets/Mask Group.png" alt="" />
          <div className="productImageSelector">
            <input type="radio" value="imgOne" name="img" />
            <input type="radio" value="imgTwo" name="img" />
            <input type="radio" value="imgThree" name="img" />
            <input type="radio" value="imgFour" name="img" />
          </div>
          <img src="../../assets/image 16.png" alt="" />
        </section>

        <section className="productInformation">
          <h3>2020 Apple iPad Air 10.9</h3>
          <section className="colorSelector">
            <h4>Colors</h4>
            <div className="colorSelection">
              <label htmlFor="colorone">
                <input type="radio" value="colorone" name="color" />
                Sky Blue
              </label>
              <label htmlFor="valuetwo">
                <input type="radio" value="colortwo" name="color" />
                Rose Gold
              </label>
              <label htmlFor="valuethree">
                <input type="radio" value="colorthree" name="color" />
                Green
              </label>
            </div>
          </section>

          <section className="productInfo">
            <h4>Get Apple TV free for a year</h4>
            <p>
              Available when your purchase any new iPhone, iPad, iPod, Mac or
              Apple TV 4.99/month after free trial.
            </p>
            <button type="button">
              Full Description
              <RightPurpleArrowIcon />
            </button>
          </section>
          <section>
            <p>Total</p>
            <p>
              <span>$</span>579
            </p>
          </section>
          <Link to="/home">
            <Button>Add to basket</Button>
          </Link>
        </section>
      </div>
    </Container>
  );
}

export default Item;