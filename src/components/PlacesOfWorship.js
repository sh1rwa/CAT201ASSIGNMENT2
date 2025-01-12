// src/components/PlacesOfWorship.js
import React from 'react';
import './PlacesOfWorship.css';

function PlacesOfWorship() {
  return (
    <div className="places-of-worship-page">
      {/* Header Section */}
      <div
        className="places-header"
        style={{
          backgroundImage: `url('/images/places-of-worship-1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="places-title-overlay">
          <h1 className="places-title">Places of Worship</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="places-content-box">
        <p>
          Penang’s rich cultural tapestry is deeply rooted in its history as a strategic trading port for the British East India Company. This role brought an influx of workers, traders, and settlers from across the globe, making it a melting pot of cultures and traditions. In addition to the major ethnic groups—Chinese, Malay, and Indian—Penang is also home to vibrant Eurasian, Siamese, and even Armenian communities, each contributing to the island’s unique heritage. These communities brought their beliefs, rituals, and customs, which have since become an integral part of Penang’s identity.
        </p>
        <p>
          One of the most remarkable aspects of Penang’s cultural landscape is its enduring spirit of religious tolerance. This is beautifully exemplified by its diverse places of worship, some of which stand harmoniously side by side. The best-known example is <b>Jalan Masjid Kapitan Keling</b>, popularly called the <b>Street of Harmony</b>. Here, you’ll find:
        </p>
        <ul>
          <li><b>Kapitan Keling Mosque:</b> A stunning 19th-century mosque built by Indian Muslim traders, known for its striking white facade and majestic golden dome.</li>
          <li><b>Goddess of Mercy Temple (Kuan Yin Teng):</b> One of the oldest Chinese temples in Penang, dating back to 1728, dedicated to Guan Yin, the Goddess of Mercy.</li>
          <li><b>St. George's Church:</b> Southeast Asia’s oldest Anglican church, built in 1818, showcasing colonial-era architecture and serene grounds.</li>
          <li><b>Sri Maha Mariamman Temple:</b> A vibrant Hindu temple adorned with intricate sculptures of deities, reflecting the deep spiritual roots of Penang’s Indian community.</li>
        </ul>
        {/* Image in the middle of the description */}
        <div className="middle-image-container">
          <img
            src="/images/places-of-worship-2.jpg"
            alt="Places of Worship Highlights"
            className="middle-image"
          />
        </div>
        <p>
          This unique street is a microcosm of Penang’s multiculturalism, where visitors can witness the peaceful coexistence of different religions and cultures. The blend of architectural styles and historical significance makes it a must-visit spot for anyone keen on understanding Penang’s harmonious diversity.
        </p>
        <p>
          Beyond the Street of Harmony, Penang is dotted with other iconic places of worship, such as the <b>Kek Lok Si Temple</b>, one of the largest Buddhist temples in Southeast Asia, and the <b>Wat Chaiyamangalaram</b>, a Thai temple housing a 33-meter-long Reclining Buddha. These landmarks further showcase the island’s rich spiritual heritage.
        </p>
        <p>
          Penang’s culture isn’t just about buildings and rituals—it’s a living, breathing celebration of diversity, a legacy of its history as a meeting point for people from all corners of the world.
        </p>
        {/* Images at the end of the page */}
        <div className="end-images-container">
          <div className="end-images-row">
            <img
              src="/images/places-of-worship-3.jpg"
              alt="Places of Worship 3"
              className="end-image"
            />
            <img
              src="/images/places-of-worship-4.jpg"
              alt="Places of Worship 4"
              className="end-image"
            />
          </div>
          <div className="end-images-row">
            <img
              src="/images/places-of-worship-5.jpg"
              alt="Places of Worship 5"
              className="end-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacesOfWorship;
