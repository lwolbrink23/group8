import React from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";
import "../Styles/Testimonials.css";
import star from "../assets/images/5stars.png";
import rightArr from "../assets/images/right-arrow.png";
import leftArr from "../assets/images/left-arrow.png";

export const Testimonials = ({
  property1,
  stars = star,
  img = star,
  stars1 = star,
  leftArrow = leftArr,
  rightArrow = rightArr,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "testimonials-1",
  });

  return (
    <div className="testimonials">
      <div className="div">
        <div className={`alex ${state.property1}`}>
          <img
            className="stars"
            alt="Stars"
            src={
              state.property1 === "testimonials-2"
                ? stars
                : state.property1 === "testimonials-3"
                ? stars
                : stars
            }
          />
          <p className="p">
            “The Suite Spot is my new addiction. Thank you for making me feel
            beautiful!”
          </p>
          <div className="text-wrapper">Alex Turner</div>
        </div>
        <div className={`sarah property-1-${state.property1}`}>
          <img
            className="img"
            alt="Stars"
            src={
              state.property1 === "testimonials-2"
                ? stars
                : state.property1 === "testimonials-3"
                ? stars
                : img
            }
          />
          <p className="p">
            <span className="span">
              "The salon suite is my go-to escape for top-notch hair and beauty
              treatments."
            </span>
            <span className="text-wrapper-2">.</span>
          </p>
          <div className="text-wrapper-3">Sarah Davis</div>
        </div>
        <div className={`michael property-1-0-${state.property1}`}>
          <div className="overlap-group">
            <img
              className="stars-2"
              alt="Stars"
              src={
                state.property1 === "testimonials-2"
                  ? stars
                  : state.property1 === "testimonials-3"
                  ? stars
                  : stars1
              }
            />
            <p className="text-wrapper-4">
              "I always leave the salon suite feeling like a million bucks,
              thanks to their talented stylists."
            </p>
          </div>
          <div className="text-wrapper-5">Michael Smith</div>
        </div>
      </div>
      <div
        className={`left-arrow-group property-1-1-${state.property1}`}
        onClick={() => {
          dispatch("click_60");
        }}
      >
        <img
          className="left-arrow"
          alt="Left arrow"
          src={
            state.property1 === "testimonials-2"
              ? leftArrow
              : state.property1 === "testimonials-3"
              ? leftArrow
              : leftArrow
          }
        />
      </div>
      <div
        className={`right-arrow-group property-1-1-${state.property1}`}
        onClick={() => {
          dispatch("click");
        }}
      >
        <img
          className="right-arrow"
          alt="Right arrow"
          src={
            state.property1 === "testimonials-2"
              ? rightArrow
              : state.property1 === "testimonials-3"
              ? rightArrow
              : rightArrow
          }
        />
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "testimonials-1") {
    switch (action) {
      case "click":
        return {
          property1: "testimonials-2",
        };
    }
  }

  if (state.property1 === "testimonials-2") {
    switch (action) {
      case "click_60":
        return {
          property1: "testimonials-1",
        };

      case "click":
        return {
          property1: "testimonials-3",
        };
    }
  }

  if (state.property1 === "testimonials-3") {
    switch (action) {
      case "click_60":
        return {
          property1: "testimonials-2",
        };
    }
  }

  return state;
}

Testimonials.propTypes = {
  property1: PropTypes.oneOf([
    "testimonials-3",
    "testimonials-1",
    "testimonials-2",
  ]),
  stars: PropTypes.string,
  img: PropTypes.string,
  stars1: PropTypes.string,
  leftArrow: PropTypes.string,
  rightArrow: PropTypes.string,
};
