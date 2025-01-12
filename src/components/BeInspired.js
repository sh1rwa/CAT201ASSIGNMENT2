// src/components/BeInspired.js
import React from 'react';
import './BeInspired.css';

function BeInspired() {
  return (
    <div className="be-inspired-page">
      {/* Header Section with Image */}
      <div
        className="be-inspired-header"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/beinspired-penang.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="be-inspired-title-overlay">
          <h1 className="be-inspired-title">About Penang</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="be-inspired-content-box">
        <h2>Discover Penang</h2>
        <p>
          Penang is a vibrant island state where history meets modernity! With its
          capital, George Town, proudly listed as a UNESCO World Heritage Site,
          Penang offers a mix of Eastern and Western cultures that’s hard to
          resist. From charming colonial streets to bustling hawker stalls serving
          world-famous street food, every corner of Penang is an adventure waiting
          to happen.
        </p>
        <p>
          Connected to the mainland by two iconic bridges and a quick ferry ride,
          Penang is easily accessible. Penang International Airport welcomes flights
          from all over the globe, including destinations like Singapore, Thailand,
          and Qatar. Fancy exploring beyond? Langkawi Island is just a short ferry
          ride or flight away, while Malaysia’s buzzing capital, Kuala Lumpur, is
          only a 50-minute flight or a 4-hour drive.
        </p>
        {/* Bridge Picture */}
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/penang-bridge.jpg`}
            alt="Penang Bridge"
            className="centered-image"
          />
        </div>

        <h2>Holiday Outfit</h2>
        <p>
          With Penang’s tropical weather, light and breathable clothing is a must!
          Sunny days are perfect for exploring the island, but don’t forget to pack
          a light jacket for those chilly air-conditioned malls or restaurants.
          Planning to visit a temple or mosque? Modesty matters—cover-ups are often
          provided, but it’s a good idea to come prepared.
        </p>
        <p>
          Pro tip: Always carry a reusable water bottle to stay hydrated, and keep
          a small umbrella handy for sudden tropical showers. It’s all part of the
          island’s charm!
        </p>

        <h2>Local Culture</h2>
        <p>
          Penang is truly a melting pot of cultures, blending Malay, Chinese, Indian,
          and Western influences into a vibrant tapestry of traditions. Whether it’s
          the colorful festivals, intricate temples, or the mouth-watering fusion
          of flavors in its food, Penang’s culture is a celebration of diversity.
        </p>
        <p>
          Language is key to understanding this rich heritage. While Malay is the
          official language, English is widely spoken, and you’ll often hear “Penang
          Hokkien”—a unique mix of Chinese dialects with Malay and English influences.
          The warm greeting <i>“Dah makan kah?”</i> (Have you eaten?) is a signature
          of Penangites’ hospitality, reflecting their love for food and connection.
        </p>
        {/* Local Culture Picture */}
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/local-culture.jpg`}
            alt="Local Culture"
            className="centered-image"
          />
        </div>

        <h2>Penang Weather</h2>
        <p>
          Get ready for year-round tropical vibes! Penang enjoys sunny days and warm
          nights, with average daytime temperatures above 30°C and nighttime temps
          rarely dropping below 25°C. Perfect for city strolls, cycling, or even
          some moonlit adventures.
        </p>
        <p>
          The warmest months? January and February, just in time for the Chinese New Year
          festivities. And if you love the rain, visit during the southwest monsoon (April
          to September) when refreshing showers keep the tropical greenery vibrant. Rain
          or shine, Penang’s charm never takes a day off!
        </p>
        {/* Weather Picture */}
        <div className="image-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/penang-weather.jpg`}
            alt="Penang Weather"
            className="centered-image"
          />
        </div>
      </div>
    </div>
  );
}

export default BeInspired;
