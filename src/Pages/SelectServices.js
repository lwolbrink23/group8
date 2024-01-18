import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { useState } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/blogpost") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
}

const SelectServices = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const clickCategory = (category) => {
    const categories = document.getElementsByClassName('category-list');
    for (let i = 0; i < categories.length; i++) {
      categories[i].style.display = 'none';
    }
    document.getElementById(category).style.display = 'block';
    resetSelectedServices();
  };

  const addToSelectedServices = (service) => {
    setSelectedServices([...selectedServices, service]);
    updateSelectedServices();
  };

  const updateSelectedServices = () => {
    const selectedListElement = document.getElementById('selectedList');
    const selectedServicesLabel = document.getElementById('selectedServicesLabel');

    selectedListElement.innerHTML = '';

    for (let i = 0; i < selectedServices.length; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = selectedServices[i];
      selectedListElement.appendChild(listItem);
    }

    selectedServicesLabel.textContent = `${selectedServices.length} services selected`;
  };

  const resetSelectedServices = () => {
    setSelectedServices([]);
    updateSelectedServices();
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
       <ScrollToTop />
      <div className="shop-name">
        <img src="assets/logo/TSS Circle logo Transparent.png" alt="back arrow" />
        <h1>Simply Chic Hair</h1>
      </div>
      <div className="image-container">
        <img src="assets/logo/TSS Circle logo Transparent.png" alt="salon" />
        <img src="assets/logo/TSS Circle logo Transparent.png" alt="salon 2" />
        <img src="assets/logo/TSS Circle logo Transparent.png" alt="salon 3" />
      </div>
      <div id="tabs">
        <button type="button" onClick={() => clickCategory('featured')}>
          Featured
        </button>
        <button type="button" onClick={() => clickCategory('cut')}>
          Cut
        </button>
        <button type="button" onClick={() => clickCategory('color')}>
          Color
        </button>
        <button type="button" onClick={() => clickCategory('blowout')}>
          Blowout
        </button>
      </div>
      <div id="featured" className="category-list">
        <div className="item-1">
          <p>Classic Blowout<br />30 minutes<br/>$75</p>
          <button type="button" onClick={() => addToSelectedServices('Classic Blowout\n30 minutes\n$75')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
        <div className="item-2">
          <p>Keratin Treatment<br />30 minutes<br/>$200</p>
          <button type="button" onClick={() => addToSelectedServices('Keratin Treatment\n30 minutes\n$200')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
        <div className="item-3">
          <p>Sew-in Extensions<br />30 minutes<br/>$500</p>
          <button type="button" onClick={() => addToSelectedServices('Sew-in Extensions\n30 minutes\n$500')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
        <div className="item-4">
          <p>Partial Balayage<br />30 minutes<br/>$70</p>
          <button type="button" onClick={() => addToSelectedServices('Partial Balayage\n30 minutes\n$70')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
      </div>
      <div className="item-5">
          <p>Full Balayage<br />30 minutes<br />$200</p>
          <button type="button" onClick={() => addToSelectedServices('Full Balayage\n30 minutes\n$200')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
        <div className="item-6">
          <p>Root Touchup<br />30 minutes<br />$50</p>
          <button type="button" onClick={() => addToSelectedServices('Root Touchup\n30 minutes\n$75')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
        <div className="item-7">
          <p>Box Braids<br />30 minutes<br />$100</p>
          <button type="button" onClick={() => addToSelectedServices('Box Braids\n30 minutes\n$100')}>
            <img src="assets/logo/TSS Circle logo Transparent.png" alt="plus sign" />
          </button>
        </div>
      <div id="cut" className="category-list">
        <p>This is the Hair cut category.</p>
      </div>
      <div id="color" className="category-list">
        <p>This is the Hair coloring category.</p>
      </div>
      <div id="blowout" className="category-list">
        <p>This is the Blowout category.</p>
      </div>
      <div>
        <h2 id="selectedServicesLabel">{`${selectedServices.length} services selected`}</h2>
        <ul id="selectedList"></ul>
       <Link to="/appointment_overview" onClick={scrollToTop}>
                  <button
            type="button">
          CONTINUE
          </button>
            </Link>
      </div>
    </div>
  );
};

export default SelectServices;
