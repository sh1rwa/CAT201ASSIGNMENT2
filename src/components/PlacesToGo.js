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
        <div className="end-images-layout">
          <div className="left-image">
            <img
              src="/images/places-of-worship-2.jpg"
              alt="Places of Worship Left"
              className="left-image-item"
            />
          </div>
          <div className="right-images">
            <img
              src="/images/places-of-worship-3.jpg"
              alt="Places of Worship Top Right"
              className="right-image-item"
            />
            <img
              src="/images/places-of-worship-4.jpg"
              alt="Places of Worship Bottom Right"
              className="right-image-item"
            />
          </div>
        </div>
        <p>
          Beyond the Street of Harmony, Penang is dotted with other iconic places of worship, such as the <b>Kek Lok Si Temple</b>, one of the largest Buddhist temples in Southeast Asia, and the <b>Wat Chaiyamangalaram</b>, a Thai temple housing a 33-meter-long Reclining Buddha. These landmarks further showcase the island’s rich spiritual heritage.
        </p>
      </div>
      {/* Footer Filler */}
      <div className="page-footer-filler"></div>
    </div>
  );
}

export default PlacesOfWorship;
