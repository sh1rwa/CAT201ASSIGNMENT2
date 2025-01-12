// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false); // Controls Places to Go dropdown menu
  const [thingsMenuOpen, setThingsMenuOpen] = useState(false); // Controls Things to Do dropdown menu
  const [selectedSubcategory, setSelectedSubcategory] = useState("Street Art");
  const [selectedThingsCategory, setSelectedThingsCategory] = useState("Food and Beverages");
  const navigate = useNavigate();

  const subcategories = [
    "Street Art",
    "Heritage Zones",
    "Places of Worship",
    "Recreations",
    "Parks & Gardens",
    "Adventure & Nature",
  ];

  const subcategoryData = {
    "Street Art": [
      { name: "Wall Murals", image: "/images/wall-mural.jpg", slug: "wall-murals" },
      { name: "Urban Exchange", image: "/images/urban-exchange.jpg", slug: "urban-exchange" },
      { name: "Wire Sculptures", image: "/images/wire-sculptures.jpg", slug: "wire-sculptures" },
      { name: "Butterworth Art Walk", image: "/images/butterworth-art-walk.jpg", slug: "butterworth-art-walk" },
    ],
    "Heritage Zones": [
      { name: "Landmarks", image: "/images/landmarks.jpg", slug: "landmarks" },
      { name: "Museums & Art Galleries", image: "/images/museum-art-galleries.jpg", slug: "museums-art-galleries" },
      { name: "Traditional Trades", image: "/images/traditional-trades.jpg", slug: "traditional-trades" },
      { name: "Peranakan", image: "/images/peranakan.jpg", slug: "peranakan" },
    ],
    "Places of Worship": [],
    "Recreations": [
      { name: "Golfing in Penang", image: "/images/golfing.jpg", slug: "golfing-in-penang" },
      { name: "Bukit Panchor State Park", image: "/images/bukit-panchor-state-park.jpg", slug: "bukit-panchor-state-park" },
      { name: "Air Hitam Dalam Educational Forest", image: "/images/air-hitam-dalam-forest.jpg", slug: "air-hitam-dalam-forest" },
      { name: "Bukit Mertajam Recreational Forest", image: "/images/bukit-mertajam-recrea-forest.jpg", slug: "bukit-mertajam-forest" },
    ],
    "Parks & Gardens": [
      { name: "Penang Hill", image: "/images/penang-hill.jpg", slug: "penang-hill" },
      { name: "Penang Botanic Gardens", image: "/images/penang-botan-garden.jpg", slug: "penang-botanic-gardens" },
      { name: "Sia Boey", image: "/images/sia-boey.jpg", slug: "sia-boey" },
      { name: "Penang National Park", image: "/images/penang-national-park.jpg", slug: "penang-national-park" },
      { name: "Tropical Spice Garden", image: "/images/tropical-spice-garden.jpg", slug: "tropical-spice-garden" },
      { name: "Tropical Fruit Farm", image: "/images/tropical-fruit-farm.jpg", slug: "tropical-fruit-farm" },
      { name: "Durian Farms", image: "/images/durian-farms.jpg", slug: "durian-farms" },
      { name: "Teluk Bahang Recreational Park", image: "/images/taman-rimba.jpg", slug: "teluk-bahang-park" },
    ],
    "Adventure & Nature": [
      { name: "Escape", image: "/images/escape.jpg", slug: "escape" },
      { name: "The Habitat", image: "/images/the-habitat.jpg", slug: "the-habitat" },
      { name: "Entopia by Penang Butterfly Farm", image: "/images/entopia-butterfly.jpg", slug: "entopia-penang" },
      { name: "Air Itam Dam", image: "/images/air-itam-dam.jpg", slug: "air-itam-dam" },
      { name: "Beaches", image: "/images/beaches.jpg", slug: "beaches" },
      { name: "Balik Pulau", image: "/images/balik-pulau.jpg", slug: "balik-pulau" },
      { name: "Bird Watching", image: "/images/bird-watching.jpg", slug: "bird-watching" },
    ],
  };

  const thingsToDoData = {
    "Food and Beverages": [
      { name: "Assam Laksa", slug: "assam-laksa", media: "/images/assam-laksa.jpg" },
      { name: "Char Koay Teow", slug: "char-koay-teow", media: "/images/char-koay-teow.jpg" },
      { name: "Nyonya Kuih & Dishes", slug: "nyonya-kuih", media: "/images/nyonya-kuih.jpg" },
      { name: "Ais Tingkap", slug: "ais-tingkap", media: "/images/ais-tingkap.jpg" },
      { name: "Teochew Chendol", slug: "teochew-chendol", media: "/images/teochew-chendol.jpg" },
      { name: "Nasi Kandar", slug: "nasi-kandar", media: "/images/nasi-kandar.jpg" },
      { name: "Curry Mee", slug: "curry-mee", media: "/images/curry-mee.jpg" },
      { name: "Nasi Lemak", slug: "nasi-lemak", media: "/images/nasi-lemak.jpg" },
      { name: "Mee Goreng", slug: "mee-goreng", media: "/images/mee-goreng.jpg" },
      { name: "Penang Rojak", slug: "penang-rojak", media: "/images/penang-rojak.jpg" },
      { name: "Chee Cheong Fun", slug: "chee-cheong-fun", media: "/images/chee-cheong-fun.jpg" },
      { name: "Lok-Lok", slug: "lok-lok", media: "/images/lok-lok.jpg" },
      { name: "Hokkien Mee", slug: "hokkien-mee", media: "/images/hokkien-mee.jpg" },
      { name: "Nasi Melayu", slug: "nasi-melayu", media: "/images/nasi-melayu.jpg" },
      { name: "Pasembur", slug: "pasembur", media: "/images/pasembur.jpg" },
      { name: "Kway Chap", slug: "kway-chap", media: "/images/kway-chap.jpg" },
      { name: "Tau Sar Piah", slug: "tau-sar-piah", media: "/images/tau-sar-piah.jpg" },
      { name: "Vegetarian Food", slug: "vegetarian-food", media: "/images/vegetarian-food.jpg" },
    ],
    "Shopping and Spa": [
      { name: "Chowrasta Market", slug: "chowrasta-market", media: "/images/chowrasta-market.jpg" },
      { name: "Shopping Malls", slug: "shopping-malls", media: "/images/shopping-malls.jpg" },
      { name: "Spas & Massages", slug: "spas-massages", media: "/images/spas-massages.jpg" },
    ],
    "Entertainment": [
      { name: "Night Life", slug: "night-life", media: "/images/night-life.jpg" },
      { name: "Night Markets", slug: "night-markets", media: "/images/night-markets.jpg" },
      { name: "Arts Centre", slug: "arts-centre", media: "/images/arts-centre.jpg" },
    ],
  };

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setThingsMenuOpen(false);
  };

  const toggleMegaMenu = (e) => {
    e.preventDefault();
    setMegaMenuOpen(!megaMenuOpen);
    setThingsMenuOpen(false); // Close Things to Do menu
  };

  const toggleThingsMenu = (e) => {
    e.preventDefault();
    setThingsMenuOpen(!thingsMenuOpen);
    setMegaMenuOpen(false); // Close Places to Go menu
  };

  return (
    <div className="header-container">
      <header className="header">
        <div className="header-left">
          <Link to="/" onClick={closeAllMenus}>
            <img src="/penang-logo.png" alt="Penang Logo" className="logo-img" />
          </Link>
          <span className="brand-name">We ❤ Penang</span>
        </div>
        <nav className="header-center">
          <ul className="nav-menu">
            <li>
              <Link to="/be-inspired" onClick={closeAllMenus}>
                Be Inspired
              </Link>
            </li>
            <li>
              <a href="#places" onClick={toggleMegaMenu}>
                Places to go {megaMenuOpen ? '▲' : '▼'}
              </a>
            </li>
            <li>
              <a href="#thingstodo" onClick={toggleThingsMenu}>
                Things to do {thingsMenuOpen ? '▲' : '▼'}
              </a>
            </li>
            <li>
              <Link to="/plan-your-trip" onClick={closeAllMenus}>
                Plan your trip
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Places to go dropdown */}
      {megaMenuOpen && (
        <div className="mega-dropdown">
          <div className="mega-inner">
            <ul className="mega-categories">
              {subcategories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedSubcategory(cat);
                      if (cat === "Places of Worship") {
                        closeAllMenus();
                        navigate("/places-of-worship"); // Direct navigation
                      }
                    }}
                    className={selectedSubcategory === cat ? 'selected-subcategory' : ''}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mega-grid">
              {subcategoryData[selectedSubcategory]?.map((card, idx) => (
                <Link
                  key={idx}
                  to={`/details/${card.slug}`}
                  onClick={closeAllMenus}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="mega-card">
                    <img src={card.image} alt={card.name} loading="lazy" />
                    <p>{card.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Things to do dropdown */}
      {thingsMenuOpen && (
        <div className="things-dropdown">
          <div className="things-inner">
            <ul className="things-categories">
              {Object.keys(thingsToDoData).map((category) => (
                <li key={category}>
                  <a
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedThingsCategory(category);
                    }}
                    className={selectedThingsCategory === category ? 'selected-subcategory' : ''}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
            <div className="things-grid">
              {thingsToDoData[selectedThingsCategory]?.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/details/${item.slug}`}
                  onClick={closeAllMenus}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="things-card">
                    <img src={item.media} alt={item.name} loading="lazy" />
                    <p>{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
